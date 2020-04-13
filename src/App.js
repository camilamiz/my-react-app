import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Finn', age: 12 },
      {name: 'Jake', age: 28 },
      {name: 'Princess Bubblegum', age: 6 }
    ],
    otherState: 'some other value'
  }

  // Handler pra indicar que é um event handler
  switchNameHandler = () => {
    // console.log('was clicked!');
    // DON'T DO THIS >> this.state.persons[0].name = 'Logan';
    this.setState( {
      persons: [
        {name: 'Finn', age: 17 },
        {name: 'Jake', age: 34 },
        {name: 'Marceline', age: 1000 }
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
