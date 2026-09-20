import { type Locator, type Page } from '@playwright/test';
import { journey } from '../fixtures/test-data';

export class ProductDetailPage {
  readonly page: Page;
  readonly title: Locator;
  readonly aboutHeading: Locator;
  readonly ingredientsHeading: Locator;
  readonly quantity: Locator;
  readonly increaseQuantityButton: Locator;
  readonly addToOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByRole('heading', { level: 1 });
    this.aboutHeading = page.getByRole('heading', { name: 'Sobre' });
    this.ingredientsHeading = page.getByRole('heading', { name: 'Ingredientes' });
    this.quantity = page.getByText(String(journey.firstProduct.quantity), { exact: true });
    this.increaseQuantityButton = page.getByRole('button', { name: 'Aumentar quantidade' });
    this.addToOrderButton = page.getByRole('button', { name: /Quero/ });
  }

  async increaseQuantity(): Promise<void> {
    await this.increaseQuantityButton.click();
  }

  async addToOrder(): Promise<void> {
    await this.addToOrderButton.click();
  }
}
