import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const ContactSection = () => {
  return (
    <StyledSection>
      <StyledContact>
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
        <p>elitegym@elite.com</p>
      </StyledContact>
      <StyledContact>
        <FontAwesomeIcon className="icon" icon={faMobileAlt} />
        <p>665 333 333</p>
      </StyledContact>
      <StyledContact>
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <p>@eliteGym</p>
      </StyledContact>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 7rem;
  min-height: 10vh;
  background-color: #333;
  font-size: 1.3rem;
  color: #fff;
  svg {
    margin-right: 1rem;
    font-size: 2rem;
    color: #dfbc25;
  }
`

const StyledContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default ContactSection
