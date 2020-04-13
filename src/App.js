import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Finn', age: 12 },
      {name: 'Jake', age: 28 },
      {name: 'Princess Bubblegum', age: 6 }
    ],
    otherState: 'some other value'
  });

  const [ otherState, setOtherState ] = useState('someother value');

  console.log(personsState, otherState)

  // Handler pra indicar que é um event handler
  const switchNameHandler = () => {
    // console.log('was clicked!');
    // DON'T DO THIS >> this.state.persons[0].name = 'Logan';
    setPersonsState( {
      persons: [
        {name: 'Finn', age: 17 },
        {name: 'Jake', age: 34 },
        {name: 'Marceline', age: 1000 }
      ]
    } );
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Adventures</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Parties</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
    </div>
  );
};

export default App;
