import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const SectionOne = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          My number one choice for pet supplies
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          petTashkent: your online pet shop for food & more
        </p>

        {/* 3 ta kartochka */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* 1. Repeat kartochkasi */}
          <Link to="/repeat" className="group block">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-left flex items-start gap-6 border border-gray-100 h-full">
              <div className="w-16 h-16 bg-green-600 rounded-full flex-shrink-0 flex items-center justify-center">
                <img src="../../../public/image.png" alt="repeat" className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Save 5% on repeat orders</h3>
                <p className="text-gray-600 mt-3 flex items-center gap-2 text-sm font-medium">
                  Discover petTashkent Repeat
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </p>
              </div>
            </div>
          </Link>

          {/* 2. ZooPoints */}
          <a href="#" className="group block">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-left flex items-start gap-6 border border-gray-100 h-full">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex-shrink-0 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" viewBox="0 0 20 20">
                  <path d="M10 2L2 10h3v6h10v-6h3L10 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Earn zooPoints and get rewards</h3>
                <p className="text-gray-600 mt-3 flex items-center gap-2 text-sm font-medium">
                  Learn more
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </p>
              </div>
            </div>
          </a>

          {/* 3. Pet Profile */}
          <a href="#" className="group block">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-left flex items-start gap-6 border border-gray-100 h-full">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Customise your experience</h3>
                <p className="text-gray-600 mt-3 flex items-center gap-2 text-sm font-medium">
                  Create a pet profile
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </p>
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}

export default SectionOne
