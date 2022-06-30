import React from 'react'

export default function Footer() {
  return (
    <footer style={footer}>
        <h2>Our Footer</h2>
    </footer>
  )
}

const footer = {
    backgroundColor: "black",
    padding: "1rem 5rem",
    textAlign: "center",
    width: "100%",
    position: "absolute",
    bottom: "0",
    left: "0",
    color: "white"
}
