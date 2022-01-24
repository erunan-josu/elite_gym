import React from 'react'
import styled from 'styled-components'
import Opacity from './Opacity'

const ClassTitle = ({ title, bg }) => {
  return (
    <StyledClass
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
    >
      <Opacity id="opacity-border" />
      <h4>{title}</h4>
    </StyledClass>
  )
}

const StyledClass = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  min-height: 60vh;
  border-radius: 3px;
  font-family: 'Ultra', serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.75s ease-out;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  h4 {
    padding: 0.5rem;
    z-index: 2;
    transition: all 0.75s ease-out;
    border-radius: 3px;
  }
  &:hover {
    transform: scale(1.1);
    h4 {
      padding: 1rem;
      transform: scale(1.7);
      color: #dfbc25;
      border: 1px solid #dfbc25;
    }
  }
  #opacity-border {
    border-radius: 3px;
  }
`

export default ClassTitle
