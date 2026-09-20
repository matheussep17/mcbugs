import { type Locator, type Page } from '@playwright/test';
import { journey } from '../fixtures/test-data';

export class MenuPage {
  readonly page: Page;
  readonly lunchCategory: Locator;
  readonly friesCategory: Locator;
  readonly drinksCategory: Locator;
  readonly dessertCategory: Locator;
  readonly cartTotal: Locator;
  readonly cartItemCount: Locator;
  readonly finalCartTotal: Locator;
  readonly finalCartItemCount: Locator;
  readonly viewOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lunchCategory = page.getByRole('button', { name: /Lanches/ });
    this.friesCategory = page.getByRole('button', { name: /Fritas/ });
    this.drinksCategory = page.getByRole('button', { name: /Bebidas/ });
    this.dessertCategory = page.getByRole('button', { name: /Sobremesas/ });
    this.cartTotal = page.getByText(journey.firstCartTotal, { exact: true });
    this.cartItemCount = page.getByText(journey.initialItemCount, { exact: false });
    this.finalCartTotal = page.getByText(journey.finalTotal, { exact: true });
    this.finalCartItemCount = page.getByText(journey.finalItemCount, { exact: false });
    this.viewOrderButton = page.getByRole('button', { name: 'Ver pedido' });
  }

  productCard(name: string): Locator {
    return this.page.getByRole('button').filter({ hasText: name });
  }

  async chooseDrinks(): Promise<void> {
    await this.drinksCategory.click();
  }

  async openProduct(name: string): Promise<void> {
    await this.productCard(name).click();
  }

  async viewOrder(): Promise<void> {
    await this.viewOrderButton.click();
  }
}
