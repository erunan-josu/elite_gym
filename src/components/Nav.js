import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    <StyledHeader>
      <StyledLogo>ELITE</StyledLogo>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/membership">Membership</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #fff;
  /* background: rgba(27, 27, 27, 0.7); */
  /* color: #fff; */
  color: #333;
  position: sticky;
  top: 0;
  h1 {
    color: #dfbc25;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
  }
  a {
    /* color: #fff; */
    color: #333;
    text-decoration: none;
  }
`

const StyledLogo = styled.h1`
  font-family: 'Ultra', serif;
  letter-spacing: 4px;
`

export default Nav
