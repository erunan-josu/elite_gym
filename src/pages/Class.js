import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Components
import Hero from '../components/Hero'
import { ClassesList } from '../data'
import { pageAnimation, fade } from '../Animations'
import useScroll from '../components/useScroll'

const Class = () => {
  const location = useLocation()
  const url = location.pathname
  const [classes, setClasses] = useState(ClassesList)
  const [myClass, setMyClass] = useState(null)

  useEffect(() => {
    const currentClass = classes.filter((elem) => elem.url === url)
    setMyClass(currentClass[0])
  }, [classes, url])

  const [element, controls] = useScroll()

  return (
    <div>
      {myClass && (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
          <Hero bg={myClass.mainImg} special={myClass.name} />
          <ClassInfo
            variants={fade}
            initial="hidden"
            animate={controls}
            ref={element}
          >
            <article>
              <h4>Description</h4>
              <div className="line"></div>
              <p className="class-description">{myClass.description}</p>
            </article>
            <article>
              <h4>Objective</h4>
              <div className="line"></div>
              <p className="class-objective">{myClass.objective}</p>
            </article>
            <article>
              <h4>Duration</h4>
              <div className="line"></div>
              <p className="class-duration">{myClass.duration} min</p>
            </article>
            <article>
              <h4>Intensity</h4>
              <div className="line"></div>
              <p className="class-intensity">{myClass.intensity}</p>
            </article>
          </ClassInfo>
        </motion.div>
      )}
    </div>
  )
}

const ClassInfo = styled(motion.div)`
  padding: 5rem 7rem;
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #dedede;
  article {
    padding: 3rem;
    display: flex;
    flex-basis: 20rem;
    flex-direction: column;
  }
  h4 {
    padding: 1rem;
    text-align: center;
    text-transform: capitalize;
  }
  .line {
    height: 0.3rem;
    margin-bottom: 3rem;
    background: #333;
  }

  .class-duration,
  .class-intensity {
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
  }
  .class-intensity {
    color: #d11c1c;
  }
  @media (max-width: 648px) {
    align-items: center;
    justify-content: center;
  }
`

export default Class
