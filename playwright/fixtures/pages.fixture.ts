import { test as base, type Page } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { MenuPage } from '../pages/MenuPage';
import { PaymentConfirmationPage } from '../pages/PaymentConfirmationPage';
import { PaymentPage } from '../pages/PaymentPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { storageKeys } from './test-data';

type OrderStorage = {
  cartItems(): Promise<string | null>;
  currentOrder(): Promise<unknown>;
};

type Pages = {
  home: HomePage;
  menu: MenuPage;
  product: ProductDetailPage;
  cart: CartPage;
  payment: PaymentPage;
  confirmation: PaymentConfirmationPage;
  orderStorage: OrderStorage;
};

export const test = base.extend<Pages>({
  page: async ({ page }, provide) => {
    await page.addInitScript((keys) => {
      for (const key of keys) localStorage.removeItem(key);
    }, Object.values(storageKeys));
    await provide(page);
  },
  home: async ({ page }, provide) => provide(new HomePage(page)),
  menu: async ({ page }, provide) => provide(new MenuPage(page)),
  product: async ({ page }, provide) => provide(new ProductDetailPage(page)),
  cart: async ({ page }, provide) => provide(new CartPage(page)),
  payment: async ({ page }, provide) => provide(new PaymentPage(page)),
  confirmation: async ({ page }, provide) => provide(new PaymentConfirmationPage(page)),
  orderStorage: async ({ page }, provide) => provide({
    cartItems: () => page.evaluate((key) => localStorage.getItem(key), storageKeys.cartItems),
    currentOrder: () => page.evaluate((key) => {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }, storageKeys.currentOrder),
  }),
});

export { expect } from '@playwright/test';

