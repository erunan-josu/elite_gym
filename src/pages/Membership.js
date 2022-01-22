import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
//Components
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import PricingSection from '../components/PricingSection'
import Footer from '../components/Footer'
// Images
import membership from '../img/membership.jpeg'

const Membership = () => {
  const { pathname } = useLocation()
  const [y, setY] = useState(0)
  const updateY = () => {
    window.onscroll = () => {
      setY(window.scrollY)
    }
  }

  useEffect(() => {
    if (pathname === '/membership') {
      updateY()
    }
  }, [y])

  return (
    <StyledContainer>
      <Nav y={y} />
      <Hero
        text1={'Affordable'}
        text2="for everyone "
        bg={membership}
        className="title"
      />
      <PricingSection />
      <Footer />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  h2 {
    text-align: center;
  }
  .subtitle {
    border-bottom: 2px solid #dfbc25;
  }
  color: #333;
`

export default Membership
