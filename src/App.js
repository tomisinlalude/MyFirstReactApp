import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
      {
        name: 'Frankenstein',
        id: 'ascr1'
      },
      {
        name: 'Dracula',
        id: 'aswp2'
      },
      {
        name: 'Zombie',
        id: 'swe0p'
      }
      ]
    };
  }
  render() {
    return (
    <div className="App">
      {this.state.monsters.map(monster => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
    );
  };
}

export default App;
