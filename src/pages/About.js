import React from 'react'
import styled from 'styled-components'

// components
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import WhyUsSection from '../components/WhyUsSection'
import Gallery from '../components/Gallery'
import FaqSection from '../components/FaqSection'

const About = () => {
  return (
    <AboutPage>
      <Nav />
      <Hero />
      <WhyUsSection />
      {/* <Gallery /> */}
      <FaqSection />
    </AboutPage>
  )
}

const AboutPage = styled.div`
  /* background: #333; */
`
export default About
