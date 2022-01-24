import React from 'react'
import styled from 'styled-components'

const FullScreenNav = () => {
  return <BigNav></BigNav>
}

const BigNav = styled.div`
  position: absolute;
  height: 90vh;
  top: 10vh;
  left: 0;
  right: 0;
  bottom: 0;
  background: #333;
`

export default FullScreenNav
