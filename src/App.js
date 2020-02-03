import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankinstien",
          id: 'ac1'
        },
        {
          name: "Dracula",
          id: 'ac2'
        },
        {
          name: "Zombie",
          id: 'ac3'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
      </div>
    );
  }
}

export default App;
