import React, { Component } from 'react'
import MainLayout from '../layout/MainLayout'

export default function Detail() {
  state={
    content: [
        {
            id: 1,
            text: "JavaScript",
            description: "JavaScript Description",
            img: require("../assets/javascript.png")
        },
        {
            id: 2,
            text: "ReactJS",
            description: "ReactJS Description",
            img: require("../assets/react.png")
        },
        {
            id: 3,
            text: "NextJS",
            description: "NextJS Description",
            img: require("../assets/next.png")
        },
    ],
    data: ""
  }

  componentDidMount(){
    let id=1;
    this.setState({
      data: this.state.content.find(item => item.id === parseInt(id))
    })
  }

  render() {
    return (
      <MainLayout>
        <main style={main}>
          <img src={this.state.data.img} alt={this.state.data.text} style={image}/>
          <div>
            <h1 style={{marginBottom: "1.5rem"}}>{this.state.data.text}</h1>
            <p>{this.state.data.description}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quibusdam mollitia inventore iste aperiam non a dolor neque quasi, nulla necessitatibus ut voluptates architecto totam accusantium vel sed praesentium, tenetur facere repudiandae tempore? Enim quis totam saepe sunt inventore vitae neque quo aut ipsum repellat! Ut voluptatem aperiam non omnis.</p>
          </div>
        </main>
      </MainLayout>
    )
  }
}

const main = {
  display: "flex",
  padding: "2rem 5rem",
  gap: "2rem"
}

const image = {
  width: "200px",
}
