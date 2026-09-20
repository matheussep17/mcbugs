# Prompt — Refatorar cenário E2E com Page Object Model (Playwright + TypeScript)

> Prompt reutilizável. Preencha o bloco **Parâmetros** e envie o restante sem
> alterações. Tudo o que não estiver nos parâmetros deve ser **descoberto pelo
> agente a partir do código**, nunca presumido.

## Referência obrigatória

- @docs/playwright-pom.md

Este prompt e `docs/playwright-pom.md` formam um par e devem ser usados juntos.
O guia é a **fonte da verdade de implementação**: estrutura de pastas, formato
do Page Object puro, injeção via fixtures, dados de teste e o formato do `.spec`.
Leia-o antes da Fase 1 e siga seus exemplos de código como padrão canônico.

Os exemplos do guia usam um domínio ilustrativo. Copie a **forma** (assinaturas,
organização, separação de responsabilidades), nunca os nomes de tela, locators
ou dados — esses vêm da análise do código da aplicação em questão.

Em caso de conflito, a ordem de precedência é: **RESTRIÇÕES_DO_PROJETO** →
convenções já existentes no repositório → `docs/playwright-pom.md` → este prompt.

## Parâmetros

Preencha antes de usar:

- **CENÁRIO**: `deve executar o fluxo completo de pedido "Para comer aqui"`
- **SPEC_ALVO**: `playwright\e2e\jornada.spec.ts`
- **FLUXO**: `D:\Repositorios\mcbugs\docs\test cases/casos-de-testes-jornada.md`
- **RESTRIÇÕES_DO_PROJETO**: `Não se aplica`

## Papel

Você é um SDET sênior especialista em Playwright + TypeScript. Sua entrega é
código de automação de produção: tipado, legível, sem abstração especulativa e
sem flakiness. Você não enfraquece um teste para fazê-lo passar — você reporta
o bloqueio com evidência.

## Objetivo

Refatorar **CENÁRIO** em **SPEC_ALVO**, construindo uma camada de Page Objects
organizada, tipada e reutilizável para todo o **FLUXO**.

Esta é uma **refatoração arquitetural**. Preserve integralmente a intenção, as
interações e os checkpoints do cenário atual. Não reduza cobertura, não remova
asserções e não altere regras de negócio da aplicação para fazer o teste passar.

## Fase 1 — Análise do código (obrigatória antes de qualquer edição)

Não peça a lista de arquivos ao usuário e não assuma a estrutura do projeto.
Descubra-a. Antes de escrever a primeira linha de código, produza um mapa do
cenário respondendo, **com evidência no código-fonte**:

1. **Stack e execução**
   - Framework de UI, roteador e bundler/dev server em uso.
   - Como a aplicação sobe em desenvolvimento (script e porta reais) — leia o
     manifesto de pacotes e a configuração do bundler/servidor.
   - Gerenciador de pacotes em uso (identifique pelo lockfile).
   - Configuração atual do Playwright: `testDir`, `baseURL`, `webServer`,
     projetos/navegadores habilitados, headed/headless.

2. **Rotas do fluxo**
   - Localize a definição de rotas da aplicação e extraia o path real de cada
     tela do **FLUXO**, incluindo parâmetros dinâmicos. Corrija o FLUXO se
     divergir do roteador — e informe a divergência.

3. **Componentes de cada tela**
   - A partir do spec atual e das rotas, siga as importações até os componentes
     que renderizam os elementos com os quais o cenário interage.
   - Para cada elemento usado no cenário, registre: papel ARIA, nome acessível,
     rótulo, placeholder ou texto renderizado — **lidos do componente**, não
     inferidos do spec legado.

4. **Dados do cenário**
   - Identifique a origem dos dados exibidos (fixtures, mocks, API, arquivo de
     dados estático) e quais valores o cenário depende.

5. **Lacunas de testabilidade**
   - Liste os elementos do cenário que **não possuem** nome acessível estável
     (ex.: botões apenas com ícone, valores em nós de texto soltos).

Só avance para a Fase 2 depois desse mapa. Se algo essencial não puder ser
determinado do código, declare a suposição explicitamente e siga — não pare o
trabalho por isso.

## Fase 2 — Implementação

Implemente sem aguardar nova confirmação.

### Estrutura

Siga a estrutura de pastas de `docs/playwright-pom.md`, espelhando a convenção
já existente no projeto quando houver uma:

```text
<testDir>/
├── e2e/          # arquivos .spec.ts (narrativa + asserções)
├── pages/        # uma classe por tela significativa do fluxo
└── fixtures/
    ├── pages.fixture.ts   # injeção tipada dos Page Objects
    └── test-data.ts       # dados do cenário
```

Crie **um Page Object por tela** do FLUXO, nomeado pelo domínio da tela.
Component Objects (em subpasta de `pages/`) apenas quando um componente for
compartilhado entre telas ou tiver complexidade própria relevante. Não crie
abstrações vazias nem uma `BasePage` genérica sem comportamento compartilhado
concreto.

### Regras dos Page Objects

Cada Page Object deve:

- receber `Page` no construtor;
- declarar `readonly page: Page` e locators públicos `readonly` para tudo que o
  spec assertar;
- expor ações com **nomes de negócio** (o que o usuário faz, não como o DOM
  reage), com retorno explícito `Promise<void>`;
- conter **somente** locators e ações;
- **não** importar `expect` nem executar asserções;
- receber dados variáveis como argumentos — nunca embutidos na classe.

Page Objects de tela paramétrica (detalhe de item, edição de registro) devem
operar com qualquer entidade recebida como argumento. Nunca crie um Page Object
por instância de dado.

### Fixtures e dados

- Estenda o `test` do Playwright em `fixtures/pages.fixture.ts` e injete todos
  os Page Objects de forma tipada (`test.extend<...>`).
- Reexporte `expect` a partir da fixture, para que o spec importe `test` e
  `expect` do mesmo módulo.
- O spec **não** pode instanciar Page Objects com `new`.
- Centralize em `fixtures/test-data.ts` todos os valores do cenário (entidades,
  textos, quantias, credenciais de teste), com `as const` quando apropriado.
- Não duplique dados entre Page Objects, fixture e spec.

### Locators e testabilidade

Prioridade de seleção, nesta ordem:

1. `getByRole()` com nome acessível
2. `getByLabel()`
3. `getByPlaceholder()`
4. `getByText()` estável

**Proibido:** `.first()`, `.last()`, `.nth()`, `locator('..')`, seletores
CSS/XPath frágeis e filtros baseados na estrutura do DOM. Use correspondência
exata quando isso eliminar ambiguidade; use regex apenas para conteúdo
genuinamente variável (valores monetários, contadores, datas).

**Itens repetidos** (linhas de carrinho, cards de produto, registros em
tabela): a alternativa correta ao índice é escopar por um locator pai e filtrar
pelo conteúdo de negócio que o usuário vê — método no Page Object que recebe a
entidade e retorna o `Locator` do item (ex.: `itemFor(name)` com
`.filter({ hasText })`). Veja a seção "Listas e itens repetidos" do guia. Isso
não é lacuna de testabilidade e não justifica `data-testid`.

**Regra de Escape.** Para cada lacuna de testabilidade mapeada na Fase 1, faça a
melhoria **mínima** no componente da aplicação para oferecer um alvo estável:

1. primeiro, `aria-label` ou texto acessível — corrige o teste **e** a
   acessibilidade real do produto;
2. `data-testid` somente quando o elemento não puder receber nome acessível
   estável — e, nesse caso, comente a exceção no Page Object justificando-a.

Não adicione `data-testid` indiscriminadamente e não altere componentes fora do
escopo do cenário sem necessidade demonstrável. Liste na entrega toda alteração
feita em código de aplicação.

### Spec refatorado

O `.spec.ts` deve ler como narrativa de negócio:

- ações apenas via Page Objects injetados;
- asserções apenas no spec;
- checkpoints preservados após cada ação e navegação crítica;
- `page` usado diretamente apenas em asserções de URL;
- zero locators inline (`page.getByRole`, `page.getByText`, `page.locator`…),
  inclusive dentro de `expect()` — asserte sobre locators expostos pelos Page
  Objects;
- zero dados de cenário hardcoded;
- zero lógica de busca de elementos ou de estrutura de DOM;
- etapas da jornada agrupadas com `test.step()`, para que o relatório reflita
  a narrativa de negócio.

Mantenha **um único** cenário. Não o fragmente em testes dependentes entre si.

## Fase 3 — Configuração e execução

Garanta que o cenário rode **do zero, sem passo manual**, na máquina de quem
clonar o repositório:

- Configure `baseURL` no Playwright com a URL real do dev server descoberta na
  Fase 1 e substitua toda URL absoluta do spec por path relativo.
- Configure `webServer` apontando para o script real de dev do projeto, com
  `reuseExistingServer: !process.env.CI`. Se o projeto já sobe o servidor por
  outro mecanismo (Docker, CI, script próprio), respeite-o e documente.
- Garanta um script de execução E2E no manifesto de pacotes, se ainda não houver.
- Preserve a configuração de navegadores e modo headed/headless já existente,
  salvo instrução em **RESTRIÇÕES_DO_PROJETO**.
- Confie no auto-waiting do Playwright. **Nunca** use `waitForTimeout`,
  `setTimeout` ou timeouts customizados.
- Não esconda falhas com `try/catch`, condicionais permissivas, `force: true`
  ou remoção de checkpoints.

Execute o cenário refatorado e corrija até passar. Em seguida, valide a
estabilidade rodando-o repetidamente (ex.: `--repeat-each=3`) — uma passagem
única não prova ausência de flakiness. Rode também a verificação de tipos e de
lint do próprio projeto, restrita aos arquivos alterados. Use o gerenciador de
pacotes identificado na Fase 1.

Se um bloqueio externo impedir a conclusão (serviço indisponível, credencial
ausente, dependência quebrada), apresente o comando executado, a saída de erro
exata e o diagnóstico — não contorne.

## Fase 4 — Autorrevisão

Verifique item a item antes de declarar concluído:

- [ ] Existe um Page Object por tela do fluxo, todos injetados via fixture tipada.
- [ ] Nenhum Page Object importa ou usa `expect`.
- [ ] O spec não instancia Page Objects com `new`.
- [ ] O spec não contém nenhum locator inline.
- [ ] O spec não contém URLs absolutas nem dados hardcoded.
- [ ] Todos os dados do cenário estão em `test-data.ts`, sem duplicação.
- [ ] Todos os locators por índice ou estrutura de DOM foram eliminados; itens
      repetidos são selecionados por escopo + conteúdo de negócio.
- [ ] Nenhum `waitForTimeout`, `setTimeout`, `force: true` ou `try/catch` no teste.
- [ ] Os checkpoints e a intenção funcional do cenário original foram preservados.
- [ ] `baseURL` e servidor configurados; o teste roda do zero sem passo manual.
- [ ] O comando de execução passa, inclusive com repetição (ex.:
      `--repeat-each=3`), ou há bloqueio externo documentado com evidência.
- [ ] Type-check e lint sem erros nos arquivos alterados.

## Entrega final

Encerre com um resumo objetivo contendo:

1. **Mapa do cenário** (Fase 1), resumido: stack, rotas reais, telas e origem
   dos dados.
2. **Arquivos criados e alterados**, com caminhos.
3. **Decisões de modelagem** e o porquê — inclusive Component Objects criados ou
   deliberadamente não criados.
4. **Alterações em código de aplicação** e a justificativa de cada uma
   (`aria-label` vs. `data-testid`, pela Regra de Escape).
5. **Comandos de validação** executados e seus resultados reais — cole a saída
   relevante, não a parafraseie.
6. **Suposições** feitas por falta de informação no código.
7. **Bloqueios externos** remanescentes, se houver.
