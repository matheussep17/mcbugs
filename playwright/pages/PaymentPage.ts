import { type Locator, type Page } from '@playwright/test';
import { journey } from '../fixtures/test-data';

export class PaymentPage {
  readonly page: Page;
  readonly total: Locator;
  readonly pixOption: Locator;
  readonly debitOption: Locator;
  readonly creditOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.total = page.getByText(journey.finalTotal, { exact: true });
    this.pixOption = page.getByRole('button', { name: /PIX/ });
    this.debitOption = page.getByRole('button', { name: /Cartão de Débito/ });
    this.creditOption = page.getByRole('button', { name: /Cartão de Crédito/ });
  }

  async choosePix(): Promise<void> {
    await this.pixOption.click();
  }
}
