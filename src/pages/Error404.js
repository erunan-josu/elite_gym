import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Components
import Nav from '../components/Nav'
// Images
import Error from '../img/404bg.jpeg'

export const Error404 = () => {
  return (
    <div>
      <Nav />
      <StyledContainer>
        <div className="content-container">
          <h2>The page you’re looking for</h2>
          <h2>can’t be found</h2>

          <Link to="/">
            <button>Return Home</button>
          </Link>
        </div>
      </StyledContainer>
    </div>
  )
}

const StyledContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Error});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  .content-container {
    text-align: center;
    padding: 3rem;
  }
  button {
    margin-top: 3rem;
    padding: 2rem 4rem;
    background-color: #dfbc25;
    font-size: 1.5rem;
    border: none;
    border-radius: 3px;
    transition: 0.5s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`

export default Error404
