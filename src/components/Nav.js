import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { lineAnim } from '../Animations'

const Nav = ({ y }) => {
  const [showLinks, setShowLinks] = useState(false)
  const activePath = useLocation().pathname

  return (
    <StyledHeader style={!y ? { position: 'sticky' } : { position: 'inherit' }}>
      <div className="limit-container">
        <StyledLogo>ELITE</StyledLogo>
        <RightSide>
          <ul className="nav-links" id={showLinks ? 'hidden' : ''}>
            <li>
              <Link
                className="links"
                to="/"
                onClick={() => {
                  setShowLinks(false)
                }}
              >
                About
              </Link>
              <Line
                className="line"
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{ width: activePath === '/' ? '55%' : '0%' }}
              />
            </li>
            <li>
              <Link
                className="links"
                to="/membership"
                onClick={() => {
                  setShowLinks(false)
                }}
              >
                Membership
              </Link>
              <Line
                className="line"
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{ width: activePath === '/membership' ? '55%' : '0%' }}
              />
            </li>
            <li>
              <Link
                className="links"
                to="/classes"
                onClick={() => {
                  setShowLinks(false)
                }}
              >
                Classes
              </Link>
              <Line
                className="line"
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{ width: activePath === '/classes' ? '55%' : '0%' }}
              />
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setShowLinks(!showLinks)
            }}
            id="menu-bars"
          />
        </RightSide>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  min-height: 10vh;
  padding: 0rem 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 12;
  background: #fff;

  .limit-container {
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: #dfbc25;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 8rem;
    position: relative;
  }
  a {
    cursor: pointer;
    color: #333;
    padding: 1rem;
    padding-right: 0rem;
    text-decoration: none;
  }
  .line {
    left: calc(0rem + 8rem);
  }

  #hidden {
    width: 100%;
    height: 92vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    position: absolute;
    top: 10vh;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    font-size: 2rem;
    li {
      padding: 0;
      width: 80%;
      text-align: center;
    }
    .links {
      cursor: pointer;
      display: block;
      width: 100%;
      margin: 0 auto;

      font-size: 2rem;
      padding: 2rem;
      transition: all 0.75s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  #menu-bars {
    cursor: pointer;
    font-size: 2rem;
    display: none;
  }

  @media (max-width: 1300px) {
    li {
      padding-left: 4rem;
    }
    .line {
      left: calc(0rem + 4rem);
    }
  }

  @media (max-width: 850px) {
    padding: 1rem 5rem;
    .nav-links {
      display: none;
    }
    #menu-bars {
      display: block;
    }
    .line {
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
`
const StyledLogo = styled.h1`
  font-family: 'Ultra', serif;
  letter-spacing: 4px;
`
const RightSide = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
`
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #dfbc25;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`

export default Nav
