import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FloatingHero from '../../components/FloatingHero/FloatingHero'
import ServiceIntro from '../../components/ServiceIntro/ServiceIntro'
import ServiceStats from '../../components/ServiceStats/ServiceStats'
import OurServices from '../../components/OurServices/OurServices'

export default function Services() {
  return (
    <div>
        <Header />
        <FloatingHero />
        <ServiceStats />
        <OurServices />
        <ServiceIntro />
        <Footer />
    </div>
  )
}
