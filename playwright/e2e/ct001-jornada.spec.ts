import { test, expect } from '@playwright/test';

test('CT001 - jornada completa para comer aqui', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.removeItem('mcbugs-cart-items');
    localStorage.removeItem('mcbugs-order-type');
    localStorage.removeItem('mcbugs-current-order');
  });
  await page.reload();

  await expect(page.getByRole('button', { name: /Para comer aqui/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Para levar/ })).toBeVisible();

  await page.getByRole('button', { name: /Para comer aqui/ }).click({ force: true });
  await expect(page).toHaveURL(/\/menu$/);
  await expect(page.getByRole('button', { name: /Lanches/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Fritas/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Bebidas/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Sobremesas/ })).toBeVisible();

  await page.getByRole('button', { name: /Big Mock.*R\$ 39,90/ }).click({ force: true });
  await expect(page).toHaveURL(/\/product\/big-mock$/);
  await expect(page.getByRole('heading', { name: 'Big Mock' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sobre' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Ingredientes' })).toBeVisible();

  await page.getByRole('button', { name: 'Aumentar quantidade' }).click({ force: true });
  await expect(page.getByText('2', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: /Quero.*R\$ 79,80/ })).toBeVisible();
  await page.getByRole('button', { name: /Quero.*R\$ 79,80/ }).click({ force: true });
  await expect(page).toHaveURL(/\/menu$/);
  await expect(page.getByText('R$ 79,80')).toBeVisible();
  await expect(page.getByText('/ 2 itens')).toBeVisible();

  await page.getByRole('button', { name: /Bebidas/ }).click({ force: true });
  await page.getByRole('button', { name: /Coca-Crash.*R\$ 5,90/ }).click({ force: true });
  await expect(page).toHaveURL(/\/product\/coca-crash$/);
  await page.getByRole('button', { name: /Quero.*R\$ 5,90/ }).click({ force: true });
  await expect(page).toHaveURL(/\/menu$/);
  await expect(page.getByText('R$ 85,70')).toBeVisible();
  await expect(page.getByText('/ 3 itens')).toBeVisible();

  const viewOrderButton = page.getByRole('button', { name: 'Ver pedido' });
  await viewOrderButton.scrollIntoViewIfNeeded();
  await viewOrderButton.click();
  await expect(page).toHaveURL(/\/cart$/);
  await expect(page.getByRole('heading', { name: 'Big Mock' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Coca-Crash' })).toBeVisible();
  await expect(page.getByText('R$ 85,70')).toBeVisible();

  await page.getByRole('button', { name: 'Finalizar pedido' }).click({ force: true });
  await expect(page.getByRole('dialog', { name: 'Finalizar Pedido' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Seu nome' }).fill('João Silva');
  await expect(page.getByRole('textbox', { name: 'Seu nome' })).toHaveValue('João Silva');
  await page.getByRole('textbox', { name: 'Seu nome' }).press('Enter');

  await expect(page).toHaveURL(/\/payment$/);
  await expect(page.getByText('R$ 85,70')).toBeVisible();
  await expect(page.getByRole('button', { name: /PIX Pagamento/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Cartão de Débito/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Cartão de Crédito/ })).toBeVisible();
  await expect(page.evaluate(() => localStorage.getItem('mcbugs-cart-items'))).resolves.toBe('[]');

  await page.getByRole('button', { name: /PIX Pagamento/ }).click({ force: true });
  await expect(page).toHaveURL(/\/payment\/pix\/confirm$/);
  await expect(page.getByText('João Silva')).toBeVisible();
  await expect(page.getByText('Comer no local')).toBeVisible();
  await expect(page.getByText('Forma de pagamento').locator('..')).toContainText('PIX');
  await expect(page.getByText('2x Big Mock')).toBeVisible();
  await expect(page.getByText('1x Coca-Crash')).toBeVisible();
  await expect(page.getByText('Após o pagamento, aguarde ser chamado pelo número do seu pedido.')).toBeVisible();

  await expect(page.evaluate(() => JSON.parse(localStorage.getItem('mcbugs-current-order') || 'null'))).resolves.toMatchObject({
    customerName: 'João Silva',
    orderType: 'dine-in',
    paymentMethod: 'pix',
    status: 'pending',
    total: 85.7,
  });

  await page.getByRole('button', { name: 'Fazer Novo Pedido' }).click({ force: true });
  await expect(page).toHaveURL(/\/$/);
  await expect(page.evaluate(() => localStorage.getItem('mcbugs-cart-items'))).resolves.toBe('[]');
  await expect(page.evaluate(() => localStorage.getItem('mcbugs-current-order'))).resolves.toBeNull();
});
