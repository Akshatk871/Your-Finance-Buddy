import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bs-success">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Your Finance Buddy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/invest">Investment</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link> 
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}
