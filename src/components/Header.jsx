import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Header({ cartCount, goToPage }) {
  return (
    <header className="bg-gradient-to-r from-emerald-700 to-green-800 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-5">
        <h1
          onClick={() => goToPage("home")}
          className="text-4xl font-bold cursor-pointer hover:text-yellow-300 transition"
        >
          zooplus
        </h1>

        <div className="flex-1 max-w-xl mx-8 relative">
          <input
            type="text"
            placeholder="Mahsulot qidiring..."
            className="w-full px-6 py-3 rounded-full text-gray-800 focus:ring-4 focus:ring-yellow-400 shadow"
          />
          <Search className="absolute right-4 top-3 text-gray-500" />
        </div>

        <div className="flex items-center gap-4">
          <button className="relative">
            <div className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full font-bold flex gap-3">
              <ShoppingCart />
              Savat
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-7 h-7 flex items-center justify-center rounded-full text-white">
                  {cartCount}
                </span>
              )}
            </div>
          </button>

          <button className="p-3 rounded-full hover:bg-white/20">
            <User size={28} />
          </button>
        </div>
      </div>

      <nav className="flex gap-10 justify-center py-3 text-lg font-medium border-t border-white/30">
        {[
          { name: "It", page: "dog" },
          { name: "Mushuk", page: "cat" },
          { name: "Qush", page: "bird" },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => goToPage(item.page)}
            className="hover:text-yellow-300 transition"
          >
            {item.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
