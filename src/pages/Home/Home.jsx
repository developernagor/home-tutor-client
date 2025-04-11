import React from 'react'
import Banner from '../../components/HomePage/Banner'
import FeaturedTutors from '../../components/HomePage/FeaturedTutors'
import HowItWorks from '../../components/HomePage/HowItWorks'
import DownloadPDF from '../../components/HomePage/DownloadPDF'
import Testimonial from '../../components/HomePage/Testimonial'
import CallToAction from '../../components/HomePage/CallToAction'
import Notice from '../../components/HomePage/Notice'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Notice></Notice>
      <FeaturedTutors></FeaturedTutors>
      <HowItWorks></HowItWorks>
      <DownloadPDF></DownloadPDF>
      <Testimonial></Testimonial>
      <CallToAction></CallToAction>
    </div>
  )
}

export default Home
