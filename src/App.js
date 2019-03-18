import React, { Component } from 'react';
import './App.css';
import ToDoMain from './components/ToDoMain';

class App extends Component {

  render() {
    return (
      <div className="App">
          <ToDoMain/>
      </div>
    );
  }
}

export default App;
