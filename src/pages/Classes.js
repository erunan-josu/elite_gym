import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Components
import { ClassesList } from '../data'
import ClassTitle from '../components/ClassTitle'
import { pageAnimation } from '../Animations'

const Classes = () => {
  const classesData = ClassesList()
  return (
    <div>
      <ClassesContainer
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {classesData.map((elem) => {
          const { id, name, url, mainImg } = elem
          return (
            <Link to={url} key={id}>
              <ClassTitle bg={mainImg} title={name} />
            </Link>
          )
        })}
      </ClassesContainer>
    </div>
  )
}

const ClassesContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  a {
    display: flex;
    justify-content: center;
    padding: 2rem;
    width: 100%;
  }
`

export default Classes
