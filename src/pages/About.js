import React from 'react'
import styled from 'styled-components'

// components
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import WhyUsSection from '../components/WhyUsSection'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'

import home from '../img/home.jpeg'

const About = () => {
  return (
    <AboutPage>
      <Nav />
      <Hero text1="Train as a Pro" text2="become" special="ELITE" bg={home} />
      <WhyUsSection />
      <FaqSection />
      <Footer />
    </AboutPage>
  )
}

const AboutPage = styled.div`
  color: #333;
`
export default About
