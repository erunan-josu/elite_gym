import React from 'react'
import styled from 'styled-components'
// Components
import Opacity from './Opacity'

const Hero = ({ text1, text2, special, bg }) => {
  return (
    <StyledHero style={{ backgroundImage: `url(${bg})` }}>
      <TitleContainer>
        <h2 className="title">{text1} </h2>
        <h2 className="subtitle">
          {text2} <span>{special}</span>
        </h2>
      </TitleContainer>
      <Opacity />
    </StyledHero>
  )
}

const StyledHero = styled.div`
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

export default Hero
