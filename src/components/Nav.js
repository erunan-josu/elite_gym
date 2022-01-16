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
    padding-left: 8rem;
  }
  a {
    cursor: pointer;
    /* color: #fff; */
    color: #333;
    padding: 1rem;
    padding-right: 0rem;
    text-decoration: none;
  }
`

const StyledLogo = styled.h1`
  font-family: 'Ultra', serif;
  letter-spacing: 4px;
`

export default Nav
