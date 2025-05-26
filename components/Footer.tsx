import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo or Brand */}
        <div>
          <h2 className="text-xl font-bold mb-3">American</h2>
          <p className="text-sm text-gray-300">Your go-to place for quality products.</p>
        </div>

        {/* Filters */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Filters</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>All</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold text-lg mb-3">About Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <Facebook className="hover:text-blue-400 cursor-pointer transition" />
            <Twitter className="hover:text-blue-400 cursor-pointer transition" />
            <Instagram className="hover:text-blue-400 cursor-pointer transition" />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-blue-800 pt-4 text-center text-gray-400 text-sm">
        © 2024 American. All rights reserved.
      </div>
    </footer>
  );
};
