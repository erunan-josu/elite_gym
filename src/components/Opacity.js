import React from 'react'
import styled from 'styled-components'

const Opacity = () => {
  return <DarkOpacity id="opacity-border"></DarkOpacity>
}

const DarkOpacity = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(51, 51, 51, 0.4);
  z-index: 1;
`

export default Opacity
