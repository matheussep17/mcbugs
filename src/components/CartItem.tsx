import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types/menu';
import { formatPrice } from '@/utils/format';
import { QuantityControl } from '@/components/QuantityControl';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export function CartItemCard({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div role="listitem" aria-label={item.product.name} className="flex gap-4 p-4 bg-card rounded-2xl shadow-soft">
      <div className="w-24 h-24 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-lg text-foreground line-clamp-1">
            {item.product.name}
          </h3>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onRemove}
            aria-label={`Remover ${item.product.name}`}
            className="text-muted-foreground hover:text-destructive flex-shrink-0"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        <p className="font-display font-bold text-accent mb-3">
          {formatPrice(item.product.price * item.quantity)}
        </p>
        <QuantityControl
          quantity={item.quantity}
          onIncrease={() => onUpdateQuantity(item.quantity + 1)}
          onDecrease={() => onUpdateQuantity(item.quantity - 1)}
          size="sm"
        />
      </div>
    </div>
  );
}
