import { test, expect } from '../fixtures/pages.fixture';
import { journey } from '../fixtures/test-data';

test('CT001 — deve executar o fluxo completo de pedido "Para comer aqui"', async ({
  page,
  home,
  menu,
  product,
  cart,
  payment,
  confirmation,
  orderStorage,
}) => {
  await test.step('Escolher pedido para comer aqui', async () => {
    await home.open();
    await expect(home.dineInOption).toBeVisible();
    await expect(home.takeawayOption).toBeVisible();
    await home.chooseDineIn();
    await expect(page).toHaveURL((url) => url.pathname === journey.routes.menu);
  });

  await test.step('Adicionar duas unidades de Big Mock', async () => {
    await expect(menu.lunchCategory).toBeVisible();
    await expect(menu.friesCategory).toBeVisible();
    await expect(menu.drinksCategory).toBeVisible();
    await expect(menu.dessertCategory).toBeVisible();
    await menu.openProduct(journey.firstProduct.name);
    await expect(page).toHaveURL((url) => url.pathname === journey.firstProduct.route);
    await expect(product.title).toHaveText(journey.firstProduct.name);
    await expect(product.aboutHeading).toBeVisible();
    await expect(product.ingredientsHeading).toBeVisible();
    await product.increaseQuantity();
    await expect(product.quantity).toBeVisible();
    await expect(product.addToOrderButton).toContainText(journey.firstProduct.lineTotal);
    await product.addToOrder();
    await expect(page).toHaveURL((url) => url.pathname === journey.routes.menu);
    await expect(menu.cartTotal).toBeVisible();
    await expect(menu.cartItemCount).toBeVisible();
  });

  await test.step('Adicionar Coca-Crash ao pedido', async () => {
    await menu.chooseDrinks();
    await menu.openProduct(journey.secondProduct.name);
    await expect(page).toHaveURL((url) => url.pathname === journey.secondProduct.route);
    await expect(product.title).toHaveText(journey.secondProduct.name);
    await product.addToOrder();
    await expect(page).toHaveURL((url) => url.pathname === journey.routes.menu);
    await expect(menu.finalCartTotal).toBeVisible();
    await expect(menu.finalCartItemCount).toBeVisible();
  });

  await test.step('Revisar o pedido e informar o nome do cliente', async () => {
    await menu.viewOrder();
    await expect(page).toHaveURL((url) => url.pathname === journey.routes.cart);
    await expect(cart.itemFor(journey.firstProduct.name)).toBeVisible();
    await expect(cart.itemFor(journey.secondProduct.name)).toBeVisible();
    await expect(cart.total).toBeVisible();
    await cart.beginCheckout();
    await expect(cart.checkoutDialog).toBeVisible();
    await cart.enterCustomerName(journey.customerName);
    await expect(cart.customerNameField).toHaveValue(journey.customerName);
    await cart.confirmOrder();
  });

  await test.step('Escolher PIX para pagar o pedido', async () => {
    await expect(page).toHaveURL((url) => url.pathname === journey.routes.payment);
    await expect(payment.total).toBeVisible();
    await expect(payment.pixOption).toBeVisible();
    await expect(payment.debitOption).toBeVisible();
    await expect(payment.creditOption).toBeVisible();
    await expect(orderStorage.cartItems()).resolves.toBe('[]');
    await payment.choosePix();
    await expect(page).toHaveURL((url) => url.pathname === journey.routes.confirmation);
  });

  await test.step('Conferir os dados do pedido e iniciar um novo pedido', async () => {
    await expect(confirmation.customerName).toBeVisible();
    await expect(confirmation.orderType).toBeVisible();
    await expect(confirmation.paymentMethod).toBeVisible();
    await expect(confirmation.firstProduct).toBeVisible();
    await expect(confirmation.secondProduct).toBeVisible();
    await expect(confirmation.dineInInstruction).toBeVisible();
    await expect(orderStorage.currentOrder()).resolves.toMatchObject({
      customerName: journey.customerName,
      ...journey.persistedOrder,
    });
    await confirmation.startNewOrder();
    await expect(page).toHaveURL((url) => url.pathname === journey.routes.home);
    await expect(orderStorage.cartItems()).resolves.toBe('[]');
    await expect(orderStorage.currentOrder()).resolves.toBeNull();
  });
});
