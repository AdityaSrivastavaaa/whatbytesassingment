import "../styles/globals.css";
import { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CartProvider } from "../context/cartContext";

export const metadata = {
  title: "Whatbytes Store",
  description: "Frontend Assignment - Whatbytes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}