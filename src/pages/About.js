import React, { Component } from 'react'
import MainLayout from '../layout/MainLayout'

export default class About extends Component {
  render() {
    return (
      <MainLayout>
        <main style={main}>
          <h1 style={{marginBottom: "1rem"}}>About Page</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci temporibus assumenda amet in odio, distinctio ratione rerum? Unde quam ab repellat laboriosam deserunt quisquam odio expedita earum veritatis dolorem maxime harum eaque, voluptates, adipisci similique laborum minus tenetur id dolorum aliquid suscipit! Repellat, nulla natus earum obcaecati necessitatibus similique magni.</p>
        </main>
      </MainLayout>
    )
  }
}

const main = {
  padding: "5rem",
}