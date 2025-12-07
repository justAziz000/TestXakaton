import React from "react";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function CategoryPage({ category, title, emoji, goToPage, selectProduct, cartCount }) {
  return (
    <>
      <Header cartCount={cartCount} goToPage={goToPage} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => goToPage("home")}
          className="flex items-center gap-2 text-green-700 font-bold mb-8"
        >
          <ArrowLeft /> Bosh sahifa
        </button>

        <h1 className="text-5xl font-extrabold text-center mb-12">
          {emoji} {title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products[category].map((p) => (
            <ProductCard key={p.id} product={p} selectProduct={selectProduct} />
          ))}
        </div>
      </div>
    </>
  );
}
