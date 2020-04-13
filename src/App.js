import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Camila', age: 37 },
      {name: 'Marcel', age: 34 },
      {name: 'Juju', age: 6 }
    ],
    otherState: 'some other value'
  }

  // Handler pra indicar que é um event handler
  switchNameHandler = () => {
    // console.log('was clicked!');
    // DON'T DO THIS >> this.state.persons[0].name = 'Logan';
    this.setState( {
      persons: [
        {name: 'Camila Yuri', age: 37 },
        {name: 'Marcel', age: 34 },
        {name: 'Juju', age: 5 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Coding</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Surfing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
