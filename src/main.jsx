import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// To‘g‘ri yo‘llar — sizning joriy tuzilmangizga moslashtirdim
import Home from '../src/firdavshome/Home.jsx'
import CatShop from '../src/firdavshome/sections/CatShop.jsx'
import ZooRepeat from './firdavshome/sections/ZooRepeat.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<CatShop />} />
        <Route path="/repeat" element={<ZooRepeat />} />
        {/* Keyinchalik qo‘shasiz: /dogs, /fish va h.k. */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)