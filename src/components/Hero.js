import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Components
import Opacity from './Opacity'
import { heroTitleReveal } from '../Animations'

const Hero = ({ text1, text2, special, bg }) => {
  return (
    <StyledHero style={{ backgroundImage: `url(${bg})` }}>
      <TitleContainer>
        <Hide>
          <motion.h2 className="title" variants={heroTitleReveal}>
            {text1}{' '}
          </motion.h2>
        </Hide>
        <Hide>
          <motion.h2 className="subtitle" variants={heroTitleReveal}>
            {text2} <span>{special}</span>
          </motion.h2>
        </Hide>
      </TitleContainer>
      <Opacity />
    </StyledHero>
  )
}

const StyledHero = styled(motion.div)`
  padding: 5rem 0rem;
  min-height: 80vh;
  object-fit: cover;
  position: relative;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position-y: 40%;
  h2 {
    font-size: 4rem;
    color: #fff;
  }
  span {
    font-family: 'Ultra', serif;
    font-weight: lighter;
    color: #dfbc25;
    letter-spacing: 3px;
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 3rem;
    }
  }
`
const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  font-size: 2rem;
  z-index: 10;
`
const Hide = styled.div`
  overflow: hidden;
`

export default Hero
