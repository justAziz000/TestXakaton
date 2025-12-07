// components/CatSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CatSection() {
  const navigate = useNavigate();

  const goToCatDetail = (type) => {
    navigate(`/cat/${type}`);
  };

  return (
    <section className="bg-gradient-to-b from-purple-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-purple-800">
          Mushuklar bo‘limi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* 1. Kasal mushuk */}
          <div
            onClick={() => goToCatDetail('kasal')}
            className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <img
              src="https://www.vet.cornell.edu/sites/default/files/styles/hero_banner/public/2023-02/cat-hospital-1600x900.jpg"
              alt="Kasal mushuk"
              className="w-full h-72 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-3">Kasal mushuk</h3>
              <p className="text-gray-700">
                Mushuklarda eng xavfli kasalliklar: FIV, FeLV, kalitsivirus, panleykopeniya. Alomatlari: ishtaha yo‘qolishi, ko‘z oqishi, aksirish.
              </p>
            </div>
          </div>

          {/* 2. Sotib olish uchun mushuk */}
          <div
            onClick={() => goToCatDetail('sotib-olish')}
            className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <img
              src="https://www.purina.com/sites/default/files/2023-02/HERO_British-Shorthair_0.jpg"
              alt="Sotib olish uchun mushuk"
              className="w-full h-72 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-3">Sotib olinadigan mushuk</h3>
              <p className="text-gray-700">
                British Shorthair, Scottish Fold, Maine Coon, Persian, Bengal va boshqa zotlar. Sertifikatli chorvachilikdan, narxi 400–5000 USD.
              </p>
            </div>
          </div>

          {/* 3. Asrab olish uchun mushuk */}
          <div
            onClick={() => goToCatDetail('asrab-olish')}
            className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <img
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/71737957/1/?bust=1722712823&width=1080&noAdEncode=true"
              alt="Asrab olish uchun mushuk"
              className="w-full h-72 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">Boqishga olish</h3>
              <p className="text-gray-700">
                Boshpanalarda minglab mushuklar sizni kutmoqda. Ko‘pincha emlangan, sterilizatsiya qilingan. To‘lov: 50–250 USD.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}