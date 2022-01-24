import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// Global Style
import GlobalStyle from './GlobalStyles'
// Components
import Nav from './components/Nav'
import Footer from './components/Footer'
// Pages
import About from './pages/About'
import Membership from './pages/Membership'
import Classes from './pages/Classes'
import Class from './pages/Class'
import Error404 from './pages/Error404'
import ScrollTop from './components/ScrollTop'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <ScrollTop />
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:id" element={<Class />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
