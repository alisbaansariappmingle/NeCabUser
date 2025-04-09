import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
import './App.css'
// import TaxiSlider from './component/TaxiSlider'
import Home from './page/Home'
import Footer from './component/Footer'
import Service from './page/Service'
import { AboutUs } from './page/AboutUs'
import Contact from './page/Contact'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
