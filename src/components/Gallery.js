import React from 'react'
import styled from 'styled-components'
// Images
import trx from '../img/trx.jpeg'
import man from '../img/man.jpeg'
import trainer from '../img/trainer.jpeg'

const Gallery = () => {
  return (
    <StyledGallery>
      <img src={trx} alt="" />
      <img src={trainer} alt="" />
      <img src={man} alt="" />
    </StyledGallery>
  )
}
const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    height: 100%;
    width: 25%;
    margin: 1rem 0rem;
    border-radius: 10px;
    -webkit-box-shadow: inset -1px 3px 8px 5px #1f87ff, 2px 5px 16px 0px #0b325e,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: inset -1px 3px 8px 5px #1f87ff,
      2px 5px 56px -10px rgba(11, 50, 98, 0.651),
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    border-radius: 10px;
  }
`
export default Gallery
