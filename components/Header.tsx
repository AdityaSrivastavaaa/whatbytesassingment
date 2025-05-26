"use client";

import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { useCart } from "../context/cartContext";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

export const Header = () => {
  const { cart } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Search input state synced with URL search param
  const [search, setSearch] = useState(searchParams.get("search") || "");

  // Update URL on search input change with debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }
      router.replace(`/?${params.toString()}`);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  return (
    <header className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold cursor-pointer">
        Logo
      </Link>

      <div className="flex items-center w-1/2 relative border border-gray-300 rounded-md bg-white">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 rounded-md text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search products"
        />
        <Search className="absolute right-3 top-2.5 text-gray-600" />
      </div>

      <Link
        href="/cart"
        className="bg-white text-blue-900 font-medium px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 relative"
      >
        <ShoppingCart size={18} />
        Cart
        {totalItems > 0 && (
          <span
            className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            aria-label={`${totalItems} items in cart`}
          >
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  );
};
