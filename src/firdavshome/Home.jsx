// src/firdavshome/sections/Home.jsx
import React from 'react'
import SectionOne from '../firdavshome/sections/SectionOne'   // ← To‘g‘ri yo‘l (shu papkada)
import ShopSection from './sections/ShopSection'

const Home = () => {
  return (
    <div>
      <SectionOne />
      <ShopSection/>
      {/* Keyinchalik boshqa sectionlar qo‘shiladi */}
    </div>
  )
}

export default Home