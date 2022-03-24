import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Components
import TitleSection from './TitleSection'
import useScroll from './useScroll'
import { faqReveal } from '../Animations'

const FaqSection = () => {
  const [element, controls] = useScroll()

  return (
    <StyledFaq
      variants={faqReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <TitleSection title="FAQ" />
      <div className="question-container">
        <h4 className="question">Is it possible to pay once a year?</h4>
        <div className="answer">
          Yes, It is and in that case you will get 1 month of membership free.
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question-container">
        <h4 className="question">Is there any permanence clause?</h4>
        <div className="answer">
          No, you can quit and restart whenever you decide.
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question-container">
        <h4 className="question">Do I have to pay enrolment fee? </h4>
        <div className="answer">
          Paying once a year there is NO enrolment fee.
        </div>
      </div>
      <div className="faq-line"></div>
    </StyledFaq>
  )
}

const StyledFaq = styled(motion.div)`
  min-height: 80vh;
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
