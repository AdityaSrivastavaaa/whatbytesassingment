"use client";
import { useCart } from "../../context/cartContext";
import { CartItem } from "../../components/CartItem";

export default function CartPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => <CartItem key={item.id} item={item} />)}
          </div>
          <div className="mt-4 font-bold text-xl">Total: ₹{total}</div>
        </>
      )}
    </div>
  );
}