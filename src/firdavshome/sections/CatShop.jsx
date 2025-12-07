import React from 'react'
import products from './Product.js'

const CatShop = () => {
  const catProducts = products.cats

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Cat Shop: Cat Supplies & Cat Accessories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {catProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-64 bg-gray-200 border-2 border-dashed rounded-t-xl overflow-hidden">
              <img
  src={product.image}
  alt={product.name}
  className="w-full h-full object-cover"
  onError={(e) => {
    e.target.onerror = null
    e.target.src = "https://dummyimage.com/300x300/cccccc/000000&text=No+Image"
  }}
/>

              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">
                    ${product.price}
                  </span>
                  <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CatShop
