"use client";

import Link from "next/link";

export const ProductCard = ({ product, addToCart }: { product: any, addToCart: (item: any) => void }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded mb-3"
        />
        <h3 className="text-lg font-semibold text-blue-900">{product.title}</h3>
        <p className="text-blue-600 font-bold">₹{product.price}</p>
      </Link>
      <button
        onClick={() =>
          addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
          })
        }
        className="mt-auto bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};
