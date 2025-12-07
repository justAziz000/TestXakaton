import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DogDetail() {
  const { type } = useParams(); // URL dan olish: /dog/kasal

  const details = {
    kasal: {
      title: "Kasal itlar haqida",
      color: "text-red-600",
      content: `
        Itlarda eng keng tarqalgan kasalliklar:
        • Parvovirus – o‘ta yuqumli, ko‘pincha kuchukchalarda
        • Distemper (it chumasi) – asab tizimiga ta’sir qiladi
        • Yurak qurtlari – chivin orqali yuqadi
        • Leptospiroz – siydik orqali tarqaladi
        
        Alomatlari: qusish, diareya (qonli), ishtaha yo‘qolishi, holsizlik, yo‘tal.
        
        EMERGENCY: Agar itingizda shu alomatlar bo‘lsa – 5 daqiqa ichida veterinarga boring!
      `
    },
    'sotib-olish': {
      title: "Sotib olinadigan itlar",
      color: "text-green-600",
      content: `
        Mashhur zotlar:
        • Labrador Retriever – oilaviy, do‘st
        • German Shepherd – himoyachi, aqlli
        • Golden Retriever – mehribon, bolalar bilan yaxshi
        • French Bulldog – kichik, shahar uchun ideal
        
        Maslahat: Faqat sertifikatli chorvachilikdan oling!
        Narxlar: 500–3000 USD (zotga qarab)
      `
    },
    'asrab-olish': {
      title: "Itni asrab olish",
      color: "text-blue-600",
      content: `
        Har yili millionlab itlar boshpanada o‘limni kutmoqda...
        
        Asrab olish afzalliklari:
        • Hayotni saqlab qolasiz
        • Ko‘pincha allaqachon emlangan va sterilizatsiya qilingan
        • Kattaroq itlar – tinchroq, o‘rgatilgan
        
        Jarayon:
        1. Boshpanaga boring
        2. Ariza to‘ldiring
        3. Intervyu + uy tekshiruvi
        4. To‘lov: 100–300 USD (emlash + chip)
        
        Siz uchun emas, balki it uchun qahramon bo‘ling ❤️
      `
    }
  };

  const data = details[type] || { title: "Topilmadi", content: "Sahifa topilmadi" };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-green-600 hover:underline mb-6 inline-block">
          ← Orqaga
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h1 className={`text-4xl font-bold ${data.color} mb-8`}>{data.title}</h1>
          <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {data.content}
          </div>
        </div>
      </div>
    </div>
  );
}