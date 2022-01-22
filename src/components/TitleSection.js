import React from 'react'
import styled from 'styled-components'

const TitleSection = ({ title, subtitle }) => {
  return (
    <StyledTitle>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <div className="line"></div>
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  h2 {
    padding-top: 4rem;
    padding-bottom: 1rem;
    color: #dfbc25;
  }

  .line {
    color: #dfbc25;
    height: 0.3rem;
    background: #dfbc25;
    margin-bottom: 4rem;
  }
`

export default TitleSection
