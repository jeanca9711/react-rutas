import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>enlaces HTML (no recomendado): </span>
        </li>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        <li>
          <span>Componente Link: </span>
        </li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/not-exist">Error 404</Link>
        <li>
          <span>Componente NavLink: </span>
        </li>
          <NavLink to="/" activeclassname="active">Home</NavLink>
          <NavLink to="/about" activeclassname="active">About</NavLink>
          <NavLink to="/contact" activeclassname="active">Contact</NavLink>
      </ol>
    </nav>
  )
}

export default MenuConceptos