import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
//Components
import Hero from '../components/Hero'
import PricingSection from '../components/PricingSection'
import { pageAnimation } from '../Animations'
// Images
import membership from '../img/membership.jpeg'

const Membership = () => {
  return (
    <StyledContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hero
        text1={'Affordable'}
        text2="for everyone "
        bg={membership}
        className="title"
      />
      <PricingSection />
    </StyledContainer>
  )
}

const StyledContainer = styled(motion.div)`
  h2 {
    text-align: center;
  }
  .subtitle {
    border-bottom: 2px solid #dfbc25;
  }
`

export default Membership
