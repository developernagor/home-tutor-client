import React from 'react'
import SocialMedia from '../../components/ContactPage/SocialMedia'
import FAQ from '../../components/ContactPage/FAQ'
import GoogleMap from '../../components/ContactPage/GoogleMap'
import ContactInformation from '../../components/ContactPage/ContactInformation'
import ContactForm from '../../components/ContactPage/ContactForm'
import ContactHero from '../../components/ContactPage/ContactHero'

function Contact() {
  return (
    <div>
      <ContactHero></ContactHero>
      <ContactForm></ContactForm>
      <ContactInformation></ContactInformation>
      <GoogleMap></GoogleMap>
      <FAQ></FAQ>
      <SocialMedia></SocialMedia>
    </div>
  )
}

export default Contact
