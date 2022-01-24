import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// components
import Hero from '../components/Hero'
import WhyUsSection from '../components/WhyUsSection'
import FaqSection from '../components/FaqSection'
import { pageAnimation } from '../Animations'
import home from '../img/home.jpeg'

const About = () => {
  return (
    <AboutPage
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hero text1="Train as a Pro" text2="become" special="ELITE" bg={home} />
      <WhyUsSection />
      <FaqSection />
    </AboutPage>
  )
}

const AboutPage = styled(motion.div)`
  color: #333;
`
export default About
