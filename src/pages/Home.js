import React, { Component } from 'react'
import MainLayout from '../layout/MainLayout';
import { Link } from 'react-router-dom';

export default class Home extends Component {

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
    }

  render() {
    return (
      <MainLayout>
        <main style={Main}>
            {this.state.content.map(item => (
                <Link style={container} to={`detail/${item.id}`} onClick={this.getid}>
                    <img src={item.img} alt={item.text} style={image}/>
                    <h3 style={{textAlign: "center", fontSize: "1.5rem", marginTop: "1rem"}}>{item.text}</h3>       
                </Link>
            ))}
        </main>
      </MainLayout>
    )
  }
}

const Main = {
    padding: "5rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    justifyItems: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    gap: "2rem"
}

const container = {
    width: "100%",
}

const image = {
    width: "100%",
}
