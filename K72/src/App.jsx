import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Agence from './Agence';
import Projets from './Projets';
import Navbar from './components/Navbar.jsx'
import StairAnimation from './components/StairAnimation.jsx'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <StairAnimation />
          <Navbar />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/agence" element={<Agence />} />
            <Route path="/projets" element={<Projets />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
