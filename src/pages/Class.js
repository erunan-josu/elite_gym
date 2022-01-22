import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// Components
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { ClassesList } from '../data'

const Class = () => {
  const location = useLocation()
  const url = location.pathname
  const [classes, setClasses] = useState(ClassesList)
  const [myClass, setMyClass] = useState(null)

  useEffect(() => {
    const currentClass = classes.filter((elem) => elem.url === url)
    setMyClass(currentClass[0])
  }, [myClass, url])

  return (
    <div>
      <Nav />
      {myClass && <Hero bg={myClass.mainImg} special={myClass.name} />}
      hello ffrom class
      <Footer />
    </div>
  )
}

export default Class
