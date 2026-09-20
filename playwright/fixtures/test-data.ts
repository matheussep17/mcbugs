export const journey = {
  routes: {
    home: '/',
    menu: '/menu',
    cart: '/cart',
    payment: '/payment',
    confirmation: '/payment/pix/confirm',
  },
  customerName: 'João Silva',
  firstProduct: {
    name: 'Big Mock',
    route: '/product/big-mock',
    quantity: 2,
    lineTotal: 'R$ 79,80',
  },
  secondProduct: {
    name: 'Coca-Crash',
    route: '/product/coca-crash',
    quantity: 1,
    lineTotal: 'R$ 5,90',
  },
  firstCartTotal: 'R$ 79,80',
  finalTotal: 'R$ 85,70',
  initialItemCount: '/ 2 itens',
  finalItemCount: '/ 3 itens',
  orderType: 'Comer no local',
  paymentMethod: 'PIX',
  dineInInstruction: 'Após o pagamento, aguarde ser chamado pelo número do seu pedido.',
  persistedOrder: {
    orderType: 'dine-in',
    paymentMethod: 'pix',
    status: 'pending',
    total: 85.7,
  },
} as const;

export const storageKeys = {
  cartItems: 'mcbugs-cart-items',
  orderType: 'mcbugs-order-type',
  currentOrder: 'mcbugs-current-order',
} as const;
