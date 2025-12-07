import React, { useState } from "react";
import CategoryPage from "./components/CategoryPage";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const goToPage = (page) => setCurrentPage(page);

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage("product");
  };

  const addToCart = () => setCartCount((c) => c + 1);

  return (
    <>
      {currentPage === "home" && (
        <div>
          <Header cartCount={cartCount} goToPage={goToPage} />
          <div className="min-h-screen bg-gray-50"></div>
        </div>
      )}

      {currentPage === "dog" && (
        <CategoryPage
          category="dog"
          title="It uchun mahsulotlar"
          emoji="🐶"
          goToPage={goToPage}
          selectProduct={selectProduct}
          cartCount={cartCount}
        />
      )}

      {currentPage === "cat" && (
        <CategoryPage
          category="cat"
          title="Mushuk uchun mahsulotlar"
          emoji="🐈"
          goToPage={goToPage}
          selectProduct={selectProduct}
          cartCount={cartCount}
        />
      )}

      {currentPage === "bird" && (
        <CategoryPage
          category="bird"
          title="Qushlar uchun mahsulotlar"
          emoji="🐦"
          goToPage={goToPage}
          selectProduct={selectProduct}
          cartCount={cartCount}
        />
      )}

      {currentPage === "product" && (
        <ProductDetail
          product={selectedProduct}
          goToPage={goToPage}
          addToCart={addToCart}
          cartCount={cartCount}
        />
      )}
    </>
  );
}
