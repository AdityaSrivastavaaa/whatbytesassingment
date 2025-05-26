"use client";

import React, { useState, useEffect } from "react";
import products from "../data/products";
import { useRouter, useSearchParams } from "next/navigation";

const categories = ["All", "Electronics", "Clothing", "Home"];

export const Sidebar = ({
  setFilteredProducts,
}: {
  setFilteredProducts: (products: any[]) => void;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize from URL or defaults
  const urlCategory = searchParams.get("category") || "All";
  const urlPrice = Number(searchParams.get("price")?.split("-")[1]) || 1000;

  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [price, setPrice] = useState(urlPrice);

  useEffect(() => {
    // Update URL when filters change
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    if (selectedCategory && selectedCategory !== "All") {
      params.set("category", selectedCategory.toLowerCase());
    } else {
      params.delete("category");
    }

    params.set("price", `0-${price}`);

    router.replace(`/?${params.toString()}`);
  }, [selectedCategory, price]);

  useEffect(() => {
    // Filter products based on current filters + search string from URL
    let filtered = products;

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (p) => p.category === selectedCategory.toLowerCase()
      );
    }

    // Price filter
    filtered = filtered.filter((p) => p.price <= price);

    // Search filter (case-insensitive substring match on title and description)
    const searchTerm = searchParams.get("search")?.toLowerCase() || "";
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm) ||
          p.description.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, price, searchParams]);

  return (
    <aside className="w-full sm:w-64 bg-blue-900 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <div className="mb-6">
        <p className="font-semibold mb-2">Category</p>
        {categories.map((cat) => (
          <label key={cat} className="block mb-1 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === cat}
              onChange={() => setSelectedCategory(cat)}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
      </div>

      <div>
        <p className="font-semibold mb-2">Price</p>
        <input
          type="range"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full cursor-pointer"
          aria-label="Filter by price"
        />
        <p className="mt-1">Up to ₹{price}</p>
      </div>
    </aside>
  );
};
