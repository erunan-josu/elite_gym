import React from 'react'
import styled from 'styled-components'
// Components
import TitleSection from './TitleSection'
import Plan from './Plan'
import { PlanList } from '../data'

const PricingSection = () => {
  const data = PlanList()
  return (
    <Pricing>
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

const Pricing = styled.div`
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
