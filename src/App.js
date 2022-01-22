import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Global Style
import GlobalStyle from './GlobalStyles'
// Pages
import About from './pages/About'
import Membership from './pages/Membership'
import Classes from './pages/Classes'
import Class from './pages/Class'
import Error404 from './pages/Error404'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<Class />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
