"use client";

import { Sidebar } from "../components/Sidebar";
import { ProductCard } from "../components/ProductCard";
import products from "../data/products";
import { useState } from "react";
import { useCart } from "../context/cartContext";

export default function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
      <div className="flex flex-col lg:flex-row gap-6 max-w-[1400px] mx-auto">
        {/* Sidebar */}
        <Sidebar setFilteredProducts={setFilteredProducts} />

        {/* Main content */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">Product Listing</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">
                No products found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
