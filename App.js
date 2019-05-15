import React, { Component } from 'react';
import './style.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      name: 'Hariumasankar',
      age:25
    }
  }

  render() {
    return (
      <div>
          {this.state.name}, my age is {this.state.age}
      </div>
    );
  }
}
export default App