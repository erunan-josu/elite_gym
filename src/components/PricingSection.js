import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Components
import TitleSection from './TitleSection'
import Plan from './Plan'
import { PlanList } from '../data'
import { fade } from '../Animations'
import useScroll from './useScroll'

const PricingSection = () => {
  const data = PlanList()
  const [element, controls] = useScroll()
  return (
    <Pricing variants={fade} initial="hidden" animate={controls} ref={element}>
      <TitleSection title="Our Plans" />
      <PlansContainer>
        {data.map((plan) => {
          return (
            <Plan
              key={plan.id}
              title={plan.name}
              description={plan.description}
              price={plan.price}
            />
          )
        })}
      </PlansContainer>
    </Pricing>
  )
}

const Pricing = styled(motion.div)`
  padding: 5rem 7rem;
  min-height: 100vh;
  background: #fff;
`
const PlansContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export default PricingSection
