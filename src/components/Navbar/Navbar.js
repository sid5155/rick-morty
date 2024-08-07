import React from 'react'
import {  Link } from 'react-router-dom'

//navbar for app's navigation
const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
    <Link  to= '/'className='text-center text-decoration-none ubuntu text-primary fs-1'>Rick and Morty</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-link active">Main Page</Link>
          <Link to= "/episode" className="nav-link">Episode</Link>
          <Link to= "/location" className="nav-link">Location</Link>
        </div>
      </div>
    </div>
  </nav> </div>
  )
}

export default Navbar