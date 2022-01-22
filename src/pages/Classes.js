import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
// Components
import { ClassesList } from '../data'
import Nav from '../components/Nav'
import ClassTitle from '../components/ClassTitle'
import Footer from '../components/Footer'

const Classes = () => {
  const classesData = ClassesList()
  return (
    <div>
      <Nav />
      <ClassesContainer>
        {classesData.map((elem) => {
          const { id, name, url, mainImg } = elem
          return (
            <Link to={url} key={id}>
              <ClassTitle bg={mainImg} title={name} />
            </Link>
          )
        })}
      </ClassesContainer>
      <Footer />
    </div>
  )
}

const ClassesContainer = styled.div`
  min-height: 100vh;
  background: #dedede;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  a {
    padding: 2rem;
    width: 100%;
  }
`

export default Classes
