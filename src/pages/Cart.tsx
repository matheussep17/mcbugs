import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItemCard } from '@/components/CartItem';
import { CheckoutDrawer } from '@/components/CheckoutDrawer';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/format';

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, getTotal, createOrder } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const total = getTotal();

  const handleCheckout = async (name: string) => {
    try {
      // Create order with temporary payment method, will be updated when user selects payment method
      await createOrder(name, 'pix');
      setIsCheckoutOpen(false);
      navigate('/payment');
    } catch (error) {
      // Error toast is shown in CartContext
      setIsCheckoutOpen(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="p-4">
          <Button
            variant="icon"
            size="icon"
            onClick={() => navigate('/menu')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center px-6 py-20">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-6">
            <Search className="w-12 h-12 text-muted-foreground" />
          </div>
          <h2 className="font-display font-bold text-2xl text-foreground mb-2">
            Nada Encontrado Aqui
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Seu carrinho está vazio. Adicione alguns itens deliciosos!
          </p>
          <Button variant="default" onClick={() => navigate('/menu')}>
            Ver cardápio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-40">
      <div className="p-4">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="icon"
            size="icon"
            onClick={() => navigate('/menu')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-display font-bold text-2xl text-foreground">
            Meu pedido
          </h1>
        </div>

        <div role="list" aria-label="Itens do pedido" className="space-y-4">
          {items.map((item) => (
            <CartItemCard
              key={item.product.id}
              item={item}
              onUpdateQuantity={(quantity) => updateQuantity(item.product.id, quantity)}
              onRemove={() => removeItem(item.product.id)}
            />
          ))}
        </div>

        {/* Total Card */}
        <div className="mt-6 bg-card rounded-2xl p-6 shadow-card">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-lg">Total do pedido</span>
            <span className="font-display font-bold text-3xl text-accent">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border space-y-3">
        <Button
          variant="accent"
          size="xl"
          className="w-full"
          onClick={() => setIsCheckoutOpen(true)}
        >
          Finalizar pedido
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full"
          onClick={() => navigate('/menu')}
        >
          Continuar comprando
        </Button>
      </div>

      <CheckoutDrawer
        open={isCheckoutOpen}
        onOpenChange={setIsCheckoutOpen}
        onSubmit={handleCheckout}
      />
    </div>
  );
};

export default Cart;
