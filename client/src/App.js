import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Register from './components/Register'



export default function App() {
  return (
    <>
      
    <Router>
      <Navbar />
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>'
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>  
      
      
     
    </>
  )
}
