import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const ContactSection = () => {
  return (
    <StyledSection>
      <StyledContact className="contact">
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        <a
          href="https://www.linkedin.com/in/josu-hern%C3%A1ndez-preciado-76966a205/"
          target="blank"
        >
          LinkedIn
        </a>
      </StyledContact>
      <StyledContact className="contact">
        <FontAwesomeIcon className="icon" icon={faGithub} />
        <a href="https://github.com/erunan-josu" target="blank">
          Github
        </a>
      </StyledContact>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 7rem;
  min-height: 10vh;
  background-color: #333;
  font-size: 1rem;
  color: #fff;
  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
    color: #dfbc25;
  }
  @media (max-width: 590px) {
    flex-direction: column;
    .contact {
      padding: 1.5rem;
    }
  }
`

const StyledContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default ContactSection
