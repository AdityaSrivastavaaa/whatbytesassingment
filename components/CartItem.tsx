"use client";

import React from "react";
import { useCart } from "../context/cartContext";

interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
}

export const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-center justify-between border p-4 rounded">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">Price: ₹{item.price}</p>
          <div className="flex items-center mt-1">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-2 bg-gray-200 hover:bg-gray-300 rounded"
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 bg-gray-200 hover:bg-gray-300 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 text-sm hover:underline"
        >
          Remove
        </button>
        <p className="font-bold mt-2">
          ₹{item.price * (item.quantity || 1)}
        </p>
      </div>
    </div>
  );
};
