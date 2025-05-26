"use client"
import React from "react";
import products from "../../../data/products";
import { useRouter } from "next/navigation";
import { useCart } from "../../../context/cartContext";

type Params = {
  params: { id: string };
};

const ProductDetailPage: React.FC<Params> = ({ params }) => {
  const { id } = params;
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const router = useRouter();

  if (!product) {
    return <p className="text-center mt-20">Product not found</p>;
  }

  const handleAddToCart = () => {
    addToCart({ id: product.id, quantity: 1, title: product.title, price: product.price });
    router.push("/cart");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-h-96 object-cover rounded-md mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">₹{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailPage;
