import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task'

const dummyTaskData = [ 
  {
    title: "Slow down",
    description:  "When leading from the front slow down for Cameron"
  },
  {
    title: "Breaks",
    description: "Provide regular coffee breaks"
  },
  {
    title: "Tutorials",
    description: "When showing how to do work provide clear examples"
  },
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          {dummyTaskData.map(item => <Task title={item.title} description={item.description} />)}
        </section>
      </div>
    );
  }
}

export default App;
