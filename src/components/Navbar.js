import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav
    className="
      navbar navbar-expand-lg navbar-light
      bg-light
      shadow
      p-4
      sticky-top
      
    "
  >
    <div className="container-fluid ">
    <Link to="/">Home <i className="bi bi-house-fill"></i></Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        <div className="flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/liked">Like <i className="bi bi-heart-fill"></i></Link>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </nav>
  )
}
