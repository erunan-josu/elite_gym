import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Global Style
import GlobalStyle from './GlobalStyles'
// Pages
import About from './pages/About'
import Membership from './pages/Membership'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </div>
  )
}

export default App
