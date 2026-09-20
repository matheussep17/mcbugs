# Exemplos de código — Page Object Model (Playwright + TS)

Referência de implementação para o prompt em `docs/playwright-pom.prompt.md`.
As decisões aqui são fixas: **PO puro** (ações + locators, asserções no
`.spec`), **fixtures** para injeção, e **testid como exceção documentada** pela
Regra de Escape.

Os exemplos usam um domínio **ilustrativo** (uma cafeteria fictícia). Copie a
forma — assinaturas, organização, separação de responsabilidades — nunca os
nomes de tela, locators ou dados: esses vêm da análise do código da aplicação
em questão.

## Estrutura de pastas

```
projeto/
├── e2e/                  # arquivos .spec.ts (narrativa + asserções)
├── pages/                # uma classe por página/componente significativo
├── fixtures/
│   ├── pages.fixture.ts  # injeção dos Page Objects via test.extend
│   └── test-data.ts      # dados de teste (nada hardcoded)
└── playwright.config.ts  # baseURL, headed, etc.
```

## Page Object (PO puro)

Locators `readonly` no construtor; métodos de ação com verbo de negócio; nenhum
`expect()` dentro da classe. O PO expõe locators públicos para o `.spec` assertar.

```typescript
import { type Page, type Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly title: Locator;
  readonly quantity: Locator;
  readonly increaseButton: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByRole('heading', { level: 1 });
    // Sem nome acessível estável; testid como exceção documentada (Regra de Escape).
    // Gap reportado ao time: adicionar data-testid no controle de quantidade.
    this.quantity = page.getByTestId('quantity-value');
    this.increaseButton = page.getByTestId('quantity-increase');
    this.addButton = page.getByRole('button', { name: /Adicionar • R\$/ });
  }

  async increaseQuantity(times: number): Promise<void> {
    for (let i = 0; i < times; i++) {
      await this.increaseButton.click();
    }
  }

  async confirm(): Promise<void> {
    await this.addButton.click();
  }
}
```

## Listas e itens repetidos

`.first()`, `.last()` e `.nth()` continuam proibidos — índice é estrutura de
DOM, não intenção de negócio. Para selecionar um item entre vários repetidos
(linha de carrinho, card de produto, registro em tabela), o padrão correto é
**escopar por um locator pai** e filtrar pelo conteúdo que o usuário vê. Isso
não exige `data-testid`: o alvo é o texto de negócio do próprio item.

```typescript
import { type Page, type Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly items: Locator;

  constructor(page: Page) {
    this.page = page;
    this.items = page.getByRole('listitem');
  }

  /** Locator da linha do produto, para o .spec assertar (visível, quantidade…). */
  itemFor(productName: string): Locator {
    return this.items.filter({ hasText: productName });
  }

  async removeItem(productName: string): Promise<void> {
    await this.itemFor(productName).getByRole('button', { name: 'Remover' }).click();
  }
}
```

No `.spec`:

```typescript
await expect(cart.itemFor(products.espressoDuplo.name)).toBeVisible();
await cart.removeItem(products.espressoDuplo.name);
```

## Fixtures (injeção dos POs)

POs injetados via `test.extend`. Nunca instanciar com `new` no teste.

```typescript
// fixtures/pages.fixture.ts
import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MenuPage } from '../pages/MenuPage';
import { ProductPage } from '../pages/ProductPage';

type Pages = {
  home: HomePage;
  menu: MenuPage;
  product: ProductPage;
};

export const test = base.extend<Pages>({
  home: async ({ page }, use) => { await use(new HomePage(page)); },
  menu: async ({ page }, use) => { await use(new MenuPage(page)); },
  product: async ({ page }, use) => { await use(new ProductPage(page)); },
});

export { expect } from '@playwright/test';
```

## Dados de teste

```typescript
// fixtures/test-data.ts
export const products = {
  espressoDuplo: { name: 'Espresso Duplo' },
  paoDeQueijo: { name: 'Pão de Queijo' },
} as const;

export const customer = {
  name: 'Ana Souza',
} as const;
```

## Teste (.spec) — narrativa + asserções

Locators só via POs (zero locators inline, mesmo dentro de `expect`); asserções
(incluindo checkpoints) só aqui. `test.step()` agrupa a narrativa e melhora a
leitura do relatório HTML.

```typescript
// e2e/jornada-pedido.spec.ts
import { test, expect } from '../fixtures/pages.fixture';
import { products } from '../fixtures/test-data';

test.describe('CT001 — Jornada: Pedido "Para levar"', () => {
  test('deve montar o pedido e concluir o pagamento', async ({ home, menu, product }) => {
    await test.step('Acessar a home', async () => {
      await home.goto();
      await expect(home.heading).toBeVisible();
    });

    await test.step('Escolher o produto no cardápio', async () => {
      await home.chooseTakeaway();
      await menu.openProduct(products.espressoDuplo.name);
      await expect(product.title).toHaveText(products.espressoDuplo.name);
    });

    await test.step('Ajustar a quantidade', async () => {
      await product.increaseQuantity(1);
      await expect(product.quantity).toHaveText('2');
      await product.confirm();
    });

    // ...continua a narrativa, sempre: ação no PO, asserção no spec
  });
});
```
