import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AboutHero from '../../components/AboutHero/AboutHero'
import VisionMission from '../../components/VisionMission/VisionMission'
import CorePhilosophy from '../../components/CorePhilosophy/CorePhilosophy'
import Leadership from '../../components/Leadership/Leadership'

export default function About() {
  return (
    <div>
        <Header />
        <AboutHero />
        <VisionMission />
        <Leadership />
        <CorePhilosophy />
        <Footer />
    </div>
  )
}
