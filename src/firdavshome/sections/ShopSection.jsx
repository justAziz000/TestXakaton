import React from 'react'
import { Link } from 'react-router-dom'

const pets = [
  {
    name: "Cat",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmT2RzbKofqs0JEa6q4KM7l125-rjIaOyYPUpMe1OjokzJfO4Nqs5xecT-DXlu0RWS_28&usqp=CAU",
    bgColor: "bg-yellow-100",
    path: "/cats"                     // ← Cat bosilganda CatShop ga o‘tadi
  },
  {
    name: "Dog",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face",
    bgColor: "bg-blue-100",
    path: "/dogs"                     // keyinchalik qo‘shasiz
  },
  {
    name: "Small Pet",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    bgColor: "bg-green-100",
    path: "/small-pets"
  },
  {
    name: "Fish",
    image: "https://pethelpful.com/.image/c_fill,g_faces:center/MTk2OTU3OTYzNTk4OTY0MzY0/why-do-goldfish-change-color.jpg",
    bgColor: "bg-cyan-100",
    path: "/fish"
  },
  {
    name: "Bird",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&h=400&fit=crop",
    bgColor: "bg-pink-100",
    path: "/birds"
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
            <Link
              key={pet.name}
              to={pet.path}
              className="group block transform hover:scale-105 transition-all duration-300"
            >
              <div className={`w-full aspect-square ${pet.bgColor} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow overflow-hidden`}>
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-800 text-center">
                {pet.name}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ShopSection