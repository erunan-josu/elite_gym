import React from 'react'
import styled from 'styled-components'

import trx from '../img/trx.jpg'
import Man from '../img/Man.jpg'
import Trainer from '../img/Trainer.jpg'

const Gallery = () => {
  return (
    <StyledGallery>
      <img src={trx} alt="" />
      <img src={Trainer} alt="" />
      <img src={Man} alt="" />
    </StyledGallery>
  )
}
const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  /* padding: 0rem 7rem; */
  img {
    height: 100%;
    width: 25%;
    margin: 1rem 0rem;
    /*     height: 300px;
    width: 400px; */
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
