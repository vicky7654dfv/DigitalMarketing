import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner1 from '../../components/Banner1/Banner1'
import ServicesSearch from '../../components/ServicesSearch/ServicesSearch'
import VideoSection from '../../components/VideoSection/VideoSection'
import CyberFeatures from '../../components/CyberFeatures/CyberFeatures'

export default function HomePage1() {
  return (
    <div>
        <Header />
        <Banner1 />
        <VideoSection />
        <ServicesSearch />
        <CyberFeatures />
        <Footer />
    </div>
  )
}
