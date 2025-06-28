"use client";

import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartIcon() {
  const { state } = useCart();

  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6" />
      {state.totalItems > 0 && (
        <div className="absolute -top-2 -right-2 bg-primary text-primary-content text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {state.totalItems > 99 ? '99+' : state.totalItems}
        </div>
      )}
    </div>
  );
} 