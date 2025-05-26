"use client";

import React, { useState } from "react";
import { useCart } from "../context/cartContext";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const ProductDetail = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-h-[400px] object-cover rounded"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
        <p className="text-xl text-green-600 font-bold mb-2">₹{product.price}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>

        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="mr-2 font-medium">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            className="w-16 border px-2 py-1 rounded"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
