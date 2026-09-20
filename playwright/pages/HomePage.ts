import { type Locator, type Page } from '@playwright/test';
import { journey } from '../fixtures/test-data';

export class HomePage {
  readonly page: Page;
  readonly dineInOption: Locator;
  readonly takeawayOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dineInOption = page.getByRole('button', { name: /Para comer aqui/ });
    this.takeawayOption = page.getByRole('button', { name: /Para levar/ });
  }

  async chooseDineIn(): Promise<void> {
    await this.dineInOption.click();
  }

  async open(): Promise<void> {
    await this.page.goto(journey.routes.home);
  }
}
