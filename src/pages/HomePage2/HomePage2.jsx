import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner2 from '../../components/Banner2/Banner2'
import TeamGrid from '../../components/TeamGrid/TeamGrid'
import TextMarquee from '../../components/TextMarquee/TextMarquee'
import QuoteSlider from '../../components/QuoteSlider/QuoteSlider'

export default function HomePage2() {
  return (
    <div>
        <Header />
        <Banner2 />
        <TextMarquee />
        <QuoteSlider />
        <TeamGrid />
        <Footer />
    </div>
  )
}
