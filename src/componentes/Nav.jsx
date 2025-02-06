import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
        {/* <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/Contacto">Contacto</a>
            </li>
            <li>
                <a href="/Soporte">Soporte</a>
            </li>
        </ul> */}
        <div>
            <h1>LOGO</h1>
        </div>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/contacto">CONTACTO</Link>
            </li>
            <li>
                <Link to="/soporte">SOPORTE</Link>
            </li>
        </ul>
    </nav>
        
    </>
  )
}

export default Nav