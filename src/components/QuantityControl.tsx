import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export function QuantityControl({ quantity, onIncrease, onDecrease, size = 'md' }: QuantityControlProps) {
  const sizeClasses = {
    sm: { button: 'h-8 w-8', text: 'text-base w-8' },
    md: { button: 'h-12 w-12', text: 'text-xl w-12' },
    lg: { button: 'h-14 w-14', text: 'text-2xl w-14' },
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className={cn('rounded-full', sizeClasses[size].button)}
        onClick={onDecrease}
        disabled={quantity <= 1}
        aria-label="Diminuir quantidade"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className={cn('font-bold text-center font-display', sizeClasses[size].text)}>
        {quantity}
      </span>
      <Button
        variant="accent"
        size="icon"
        className={cn('rounded-full', sizeClasses[size].button)}
        onClick={onIncrease}
        aria-label="Aumentar quantidade"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
