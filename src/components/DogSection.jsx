import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router kerak!

export default function ZooplusHeader() {
  const navigate = useNavigate();

  const goToDetail = (type) => {
    navigate(`/dog/${type}`); // Yangi sahifaga o'tish
  };

  return (
    <>
      {/* HEADER */}
      <header className="bg-gradient-to-r from-green-700 to-green-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold">zooplus</h1>
          <div className="flex items-center bg-white rounded-full px-6 py-3 w-96">
            <input type="text" placeholder="Search the store" className="w-full outline-none text-gray-700" />
            <span className="ml-3">Search</span>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 transition text-black px-8 py-3 rounded-full flex items-center gap-3 font-semibold">
            <span>Cart</span> Basket
          </button>
        </div>
      </header>

      {/* NAV + DOG KARTALARI */}
      <nav className="bg-gray-50 border-b py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Itlar bo‘limi</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Kasal it */}
            <div
              onClick={() => goToDetail('kasal')}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <img
                src="https://www.countrysidevets.net/wp-content/uploads/sites/359/2023/01/Dog-Checkup.png"
                alt="Kasal it"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-600">Kasal it</h3>
                <p className="text-gray-600 mt-3">
                  Parvovirus, distemper, yurak qurtlari kabi xavfli kasalliklar. Alomatlar: qusish, diareya, holsizlik. Zudlik bilan veterinarga boring!
                </p>
              </div>
            </div>

            {/* 2. Sotib olish */}
            <div
              onClick={() => goToDetail('sotib-olish')}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <img
                src="https://perfectpetsdenver.com/wp-content/uploads/2025/01/cropped-cropped-Websiteheader-1.jpg"
                alt="Sotib olish uchun it"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-600">Sotib olinadigan it</h3>
                <p className="text-gray-600 mt-3">
                  Labrador, German Shepherd, Golden Retriever va boshqa zotlar. Sertifikatli chorvachilikdan, narxi 500–3000 USD.
                </p>
              </div>
            </div>

            {/* 3. Asrab olish */}
            <div
              onClick={() => goToDetail('asrab-olish')}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-shadow-2xl transition duration-300"
            >
              <img
                src="https://static.wixstatic.com/media/783444_082b3556f174403991278ff59ff49aea~mv2.jpg/v1/fill/w_742,h_400,fp_0.50_0.55,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6437_heic.jpg"
                alt="Asrab olish uchun it"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600">Boqishga olish</h3>
                <p className="text-gray-600 mt-3">
                  Hayvonlar boshpanasidan asrab oling ❤️ Jarayon: ariza, intervyu, to‘lov 100–300 USD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}