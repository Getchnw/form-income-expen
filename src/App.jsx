import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add_in_ex from './components/Add_in_ex'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Show_in_ex from './components/Show_in_ex'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="h-screen flex items-center justify-center flex-col">
        <Navbar />
        
        <Routes>
          {/* Define your Routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/add_in_ex" element={<Add_in_ex />} />
          <Route path="/show_in_ex" element={<Show_in_ex />} />
        </Routes>
      </div>
    </Router>
   
  )
}

export default App
