import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={nav}>
        <h2 style={{cursor: "pointer", color: "white"}}>React Router</h2>
        <ul style={ul}>
            <li ><Link to="/" style={li}>Home</Link></li>
            <li ><Link to="/about" style={li}>About</Link></li>
            <li ><Link to="/contact" style={li}>Contact</Link></li>
        </ul>
    </nav>
  )
}

const nav = {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 5rem",
    width: "100vw"
}

const ul = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "20%",
}

const li = {
  textDecoration: "none",
  color: "white",
  fontWeight: "bolder",
  cursor: "pointer",
}
