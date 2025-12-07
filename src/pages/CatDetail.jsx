// pages/CatDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CatDetail() {
  const { type } = useParams();

  const info = {
    kasal: {
      title: "Kasal mushuklar haqida",
      color: "text-red-600",
      text: `Mushuklarda eng xavfli kasalliklar:
• Panleykopeniya ("mushuk chumasi") – o‘lim darajasi yuqori
• FIV (mushuk immun tanqisligi) – OIVga o‘xshaydi
• FeLV (mushuk leykemiyasi)
• Kalitsivirus va herpesvirus – yuqori nafas yo‘llari kasalligi

Alomatlari:
- Ko‘z va burundan oqish
- Aksirish, yo‘tal
- Og‘izda yaralar
- Ishtaha yo‘qolishi, vazn tushishi

MUHIM: Har yili emlash zarur! Agar alomatlar bo‘lsa – zudlik bilan veterinarga!`
    },
    'sotib-olish': {
      title: "Sotib olinadigan mushuk zotlari",
      color: "text-green-600",
      text: `Mashhur zotlar:
• British Shorthair – tinch, mehribon
• Scottish Fold – qulog‘i bukilgan, juda shirin
• Maine Coon – dunyodagi eng katta uy mushugi
• Ragdoll – qo‘lga olganda "latta"dek bo‘shashadi
• Bengal – yovvoyi ko‘rinishli, faol
• Persian – uzun mo‘ynali, aristokrat

Maslahat: Faqat rasmiy chorvachilikdan oling. Narxlar: 400–5000 USD (zot va naslga qarab).`
    },
    'asrab-olish': {
      title: "Mushukni asrab olish",
      color: "text-blue-600",
      text: `Har kuni yuzlab mushuklar boshpanalarda o‘limni kutmoqda...

Afzalliklari:
- Ko‘pincha allaqachon emlangan va sterilizatsiya qilingan
- Kattaroq mushuklar – tinchroq, hojatxonaga o‘rgangan
- Siz hayotni saqlab qolasiz

Jarayon:
1. Boshpanaga boring yoki onlayn ariza to‘ldiring
2. Intervyu (uy sharoitini tekshirish)
3. Kichik to‘lov: 50–250 USD (emlash, chip, sterilizatsiya)

"Asrab olish – bu sevgi bilan qutqarishdir"`
    }
  };

  const data = info[type] || { title: "Topilmadi", text: "Sahifa mavjud emas" };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-block mb-8 text-purple-700 hover:underline text-lg font-medium">
          ← Orqaga
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <h1 className={`text-5xl font-bold ${data.color} mb-10`}>{data.title}</h1>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {data.text}
          </p>
        </div>
      </div>
    </div>
  );
}