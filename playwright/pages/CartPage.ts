import { type Locator, type Page } from '@playwright/test';
import { journey } from '../fixtures/test-data';

export class CartPage {
  readonly page: Page;
  readonly items: Locator;
  readonly total: Locator;
  readonly checkoutButton: Locator;
  readonly checkoutDialog: Locator;
  readonly customerNameField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.items = page.getByRole('listitem');
    this.total = page.getByText(journey.finalTotal, { exact: true });
    this.checkoutButton = page.getByRole('button', { name: 'Finalizar pedido' });
    this.checkoutDialog = page.getByRole('dialog', { name: 'Finalizar Pedido' });
    this.customerNameField = page.getByRole('textbox', { name: 'Seu nome' });
  }

  itemFor(name: string): Locator {
    return this.items.filter({ hasText: name });
  }

  async beginCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }

  async enterCustomerName(name: string): Promise<void> {
    await this.customerNameField.fill(name);
  }

  async confirmOrder(): Promise<void> {
    await this.customerNameField.press('Enter');
  }
}
