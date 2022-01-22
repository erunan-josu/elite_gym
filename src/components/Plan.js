import React from 'react'
import styled from 'styled-components'

const Plan = ({ title, description, price }) => {
  return (
    <StyledPlan>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{price}€ / month </p>
      <div className="underline"></div>
    </StyledPlan>
  )
}
const StyledPlan = styled.div`
  text-align: center;
  padding: 2rem;
  font-weight: bold;
  min-width: 400px;
  /* max-width: 400px; */
  h4 {
    margin-bottom: 2rem;
  }
  p {
    padding: 1rem;
  }
  .underline {
    height: 0.3rem;
    background: #333;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`

export default Plan
