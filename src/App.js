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
  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DON'T DO THIS >> this.state.persons[0].name = 'Logan';
    this.setState( {
      persons: [
        {name: newName, age: 17 },
        {name: 'Jake!', age: 34 },
        {name: 'Marceline', age: 1000 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Finn', age: 17 },
        {name: event.target.value, age: 34 },
        {name: 'Marceline', age: 1000 }
      ]
    } )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherti',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Finn, the human')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>My Hobbies: Coding
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Jake, the dog')}
          changed={this.nameChangedHandler}>My Hobbies: Surfing (o nome muda preenchendo a caixa de texto)
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>
        </Person>
      </div>
    );
  }
}

export default App;
