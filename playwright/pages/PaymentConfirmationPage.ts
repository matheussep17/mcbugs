import { type Locator, type Page } from '@playwright/test';
import { journey } from '../fixtures/test-data';

export class PaymentConfirmationPage {
  readonly page: Page;
  readonly customerName: Locator;
  readonly orderType: Locator;
  readonly paymentMethod: Locator;
  readonly firstProduct: Locator;
  readonly secondProduct: Locator;
  readonly dineInInstruction: Locator;
  readonly newOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.customerName = page.getByText(journey.customerName, { exact: true });
    this.orderType = page.getByText(journey.orderType, { exact: true });
    this.paymentMethod = page.getByRole('group', { name: 'Detalhes do pagamento' }).getByText(journey.paymentMethod, { exact: true });
    this.firstProduct = page.getByText(`${journey.firstProduct.quantity}x ${journey.firstProduct.name}`, { exact: true });
    this.secondProduct = page.getByText(`${journey.secondProduct.quantity}x ${journey.secondProduct.name}`, { exact: true });
    this.dineInInstruction = page.getByText(journey.dineInInstruction, { exact: true });
    this.newOrderButton = page.getByRole('button', { name: 'Fazer Novo Pedido' });
  }

  async startNewOrder(): Promise<void> {
    await this.newOrderButton.click();
  }
}
