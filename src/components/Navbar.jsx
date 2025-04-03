import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
  return (
    <nav className='container__navbar'>

        <Link to="/">Home</Link>
        <Link to="/cortes">Cortes</Link>
        <Link to="/trancas">Tranças</Link>
        <Link to="/contato">Contato</Link>
      
    </nav>
  )
}

export default Navbar
