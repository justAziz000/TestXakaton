import React from "react";
import Header from "./Header";
import { ArrowLeft, ShoppingCart } from "lucide-react";

export default function ProductDetail({ product, goToPage, addToCart, cartCount }) {
  if (!product) return null;

  const category = product.category;

  return (
    <>
      <Header cartCount={cartCount} goToPage={goToPage} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => goToPage(category)}
          className="flex items-center gap-2 text-green-700 font-bold mb-6"
        >
          <ArrowLeft /> Orqaga
        </button>

        <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden p-6">
          <img src={product.image} className="w-full object-cover" />

          <div>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
              {category === "dog"
                ? "It uchun"
                : category === "cat"
                ? "Mushuk uchun"
                : "Qush uchun"}
            </span>

            <h1 className="text-4xl font-extrabold mt-6 mb-4">{product.name}</h1>

            <p className="text-lg text-gray-600 mb-6">{product.details}</p>

            <div className="text-5xl font-extrabold text-green-700 mb-6">
              {product.price.toLocaleString()}{" "}
              <span className="text-2xl">so‘m</span>
            </div>

            <button
              onClick={addToCart}
              className="w-full bg-yellow-400 py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-4 hover:bg-yellow-500"
            >
              <ShoppingCart /> Savatga qo‘shish
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
