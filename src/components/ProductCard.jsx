import React from "react";
import { ChevronRight } from "lucide-react";

export default function ProductCard({ product, selectProduct }) {
  return (
    <div
      onClick={() => selectProduct(product)}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300"
    >
      <img
        src={product.image}
        className="w-full h-64 object-cover group-hover:scale-110 transition"
      />
      <div className="p-6">
        <h3 className="font-bold text-xl group-hover:text-green-700">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{product.details}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-green-700">
            {product.price.toLocaleString()} so‘m
          </span>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}
