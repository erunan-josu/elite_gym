import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faEuroSign,
  faDumbbell,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

import Gallery from './Gallery'

const WhyUsSection = () => {
  return (
    <StyledWhy>
      <h2>Why Choose Us</h2>
      <h3>A choice that makes the difference</h3>
      <div className="line"></div>
      <Cards>
        <Card>
          <div className="icon">
            <FontAwesomeIcon icon={faBuilding} />
            <h4>Installations</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            laboriosam expedita quasi fugit ullam optio!
          </p>
        </Card>
        <Card>
          <div className="icon">
            <FontAwesomeIcon icon={faDumbbell} />
            <h4>Equipment</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            laboriosam expedita quasi fugit ullam optio!
          </p>
        </Card>
        <Card>
          <div className="icon">
            <FontAwesomeIcon icon={faUsers} />
            <h4>Staff</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            laboriosam expedita quasi fugit ullam optio!
          </p>
        </Card>
        <Card>
          <div className="icon">
            <FontAwesomeIcon icon={faEuroSign} />
            <h4>Affordable</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            laboriosam expedita quasi fugit ullam optio!
          </p>
        </Card>
      </Cards>
      <Gallery />
    </StyledWhy>
  )
}

const StyledWhy = styled.div`
  padding: 5rem 7rem;
  min-height: 90vh;
  height: auto;

  .reasons-container {
    padding: 2rem 0rem;
    display: flex;
  }
  h2 {
    padding-top: 4rem;
    padding-bottom: 1rem;
  }
  h3 {
    color: #999;
    padding: 1rem 0.5rem 1rem 0.5rem;
  }
  h4 {
    padding-bottom: 2rem;
  }
  .line {
    height: 0.3rem;
    background: #333;
    margin-bottom: 4rem;
  }
  svg {
    font-size: 3rem;
  }
  p {
    padding: 1rem;
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 6rem;
`
const Card = styled.div`
  display: flex;
  flex-basis: 20rem;
  flex-direction: column;
  padding-right: 5rem;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  h4 {
    margin-left: 1rem;
    padding: 1rem;
  }
`

export default WhyUsSection
