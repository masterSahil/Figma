import { useState } from 'react'
import './App.css'
import HeroSection from './component/Hero'
import AboutSection from './component/About'
import FeaturesSection from './component/WhyChooseUs'
import WorkingHours from './component/Reservation'
import FoodShowcase from './component/GrandSection'

function App() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <WorkingHours />
      <FoodShowcase />
    </>
  )
}

export default App
