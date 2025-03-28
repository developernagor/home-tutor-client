import React from 'react'
import Banner from '../../components/HomePage/Banner'
import FeaturedTutors from '../../components/HomePage/FeaturedTutors'
import HowItWorks from '../../components/HomePage/HowItWorks'
import CoursesAndSubjects from '../../components/HomePage/CoursesAndSubjects'
import Testimonial from '../../components/HomePage/Testimonial'
import CallToAction from '../../components/HomePage/CallToAction'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedTutors></FeaturedTutors>
      <HowItWorks></HowItWorks>
      <CoursesAndSubjects></CoursesAndSubjects>
      <Testimonial></Testimonial>
      <CallToAction></CallToAction>
    </div>
  )
}

export default Home
