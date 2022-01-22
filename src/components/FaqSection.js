import React from 'react'
import styled from 'styled-components'
import TitleSection from './TitleSection'

const FaqSection = () => {
  return (
    <StyledFaq>
      <TitleSection title="FAQ" />
      <div className="question-container">
        <h4 className="question">Can I take </h4>
        <div className="answer">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam!
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question-container">
        <h4 className="question">Lorem, ipsum dolor.</h4>
        <div className="answer">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam!
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question-container">
        <h4 className="question">Lorem, ipsum dolor.</h4>
        <div className="answer">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam!
        </div>
      </div>
      <div className="faq-line"></div>
    </StyledFaq>
  )
}

const StyledFaq = styled.div`
  min-height: 90vh;
  background: #dedede;
  padding: 5rem 7rem;
  h4 {
    padding: 1rem 0rem;
  }

  .question-container {
    cursor: pointer;
    padding: 1rem 2rem 2rem 2rem;
  }
  .faq-line {
    height: 0.2rem;
    background: #333;
    margin: 1rem 0rem;
  }
`

export default FaqSection
