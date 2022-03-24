import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faEuroSign,
  faDumbbell,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

// Components
import TitleSection from './TitleSection'
import Gallery from './Gallery'
import { fade } from '../Animations'
import useScroll from './useScroll'

const WhyUsSection = () => {
  const [element, controls] = useScroll()

  return (
    <StyledWhy
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <TitleSection
        title="Why Choose Us"
        subtitle="A choice that makes the difference"
      />
      <Cards>
        <Card>
          <div className="icon">
            <FontAwesomeIcon icon={faBuilding} />
            <h4>Installations</h4>
          </div>
          <p>The biggest place to train in Vitoria-Gasteiz.</p>
        </Card>
        <Card>
          <div className="icon">
            <FontAwesomeIcon icon={faDumbbell} />
            <h4>Equipment</h4>
          </div>
          <p>
            Train as a PRO with the best material provided by the biggest
            brands.
          </p>
        </Card>
        <Card>
          <div className="icon">
            <FontAwesomeIcon icon={faUsers} />
            <h4>Staff</h4>
          </div>
          <p>
            Personal trainers specialized in different areas to provide you the
            best results.
          </p>
        </Card>
        <Card>
          <div className="icon">
            <FontAwesomeIcon icon={faEuroSign} />
            <h4>Affordable</h4>
          </div>
          <p>
            Adjust your plan to your wallet. Different plans for every kind of
            trainers.
          </p>
        </Card>
      </Cards>
      <Gallery />
    </StyledWhy>
  )
}

const StyledWhy = styled(motion.div)`
  padding: 5rem 7rem;
  min-height: 90vh;
  height: auto;

  .reasons-container {
    padding: 2rem 0rem;
    display: flex;
  }
  h3 {
    color: #999;
    padding: 1rem 0.5rem 1rem 0.5rem;
  }
  h4 {
    padding-bottom: 2rem;
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
