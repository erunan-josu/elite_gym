import React from 'react'
import styled from 'styled-components'

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>FAQ</h2>
      <div className="line"></div>
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
  background: #222;
  color: #fff;
  padding: 5rem 7rem;
  h2 {
    padding-top: 4rem;
    padding-bottom: 1rem;
  }
  h4 {
    padding: 1rem 0rem;
  }
  .line {
    height: 0.3rem;
    background: #fff;
    margin-bottom: 4rem;
  }
  .question-container {
    cursor: pointer;
    padding: 1rem 2rem 2rem 2rem;
  }
  .faq-line {
    height: 0.2rem;
    background: #ccc;
    margin: 1rem 0rem;
  }
`

export default FaqSection
