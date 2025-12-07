// src/firdavshome/sections/ShopSection.jsx
import React from 'react'

const pets = [
  {
    name: "Cat",
    image: "https://images.unsplash.com/photo-1596854307943-25ddab767b77?w=400&h=400&fit=crop&crop=face",
    bgColor: "bg-yellow-100"
  },
  {
    name: "Dog",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face",
    bgColor: "bg-blue-100"
  },
  {
    name: "Small Pet",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    bgColor: "bg-green-100"
  },
  {
    name: "Fish",
    image: "https://images.unsplash.com/photo-1544551762-8cba1245e80c?w=400&h=400&fit=crop",
    bgColor: "bg-gray-200"
  },
  {
    name: "Bird",
    image: "https://images.unsplash.com/photo-1452573992416-2f0e6c1f4a66?w=400&h=400&fit=crop",
    bgColor: "bg-pink-100"
  }
]

const ShopSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Shop for your pet
        </h2>

        {/* Hayvonlar kartochkalari */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {pets.map((pet) => (
            <div
              key={pet.name}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className={`w-full aspect-square ${pet.bgColor} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow`}>
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-800">
                {pet.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ShopSection