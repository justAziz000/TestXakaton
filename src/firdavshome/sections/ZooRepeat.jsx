import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircle } from "react-icons/io5";

const ZooRepeat = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-[1240px] mx-auto px-4">
        <Link to="/" className="inline-block mb-8 text-blue-600 hover:underline text-lg font-medium">
        <IoArrowBackCircle className='w-15 h-15 text-green-700'/>
        </Link>

        <h1 className="text-5xl font-bold mb-10 text-green-700">petTashkent Repeat</h1>

        {/* HECH QANDAY IMPORT YO‘Q — to‘g‘ridan-to‘g ‚ri public dan */}
        <img
          src="/public/zooplus_Autoshipment_Header_LP_1000x320_UK.webp"
          alt="Repeat banner"
          className="w-full rounded-2xl shadow-2xl"
        />

        <div className="mt-12 bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-green-700">Nima uchun Repeat?</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>Har oy avtomatik yetkazib berish</li>
            <li>Har safar 5% chegirma</li>
            <li>Bepul yetkazib berish (100 000 so‘mdan yuqori)</li>
            <li>Istalgan vaqt bekor qilish mumkin</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ZooRepeat