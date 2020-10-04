import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 1, name : 'Max', age: 28 },
      { id: 2, name : 'Manu', age: 29 },
      { id: 3, name : 'Stephanie', age: 20},
    ],
    showPerson : false
  }

  //normal function
  // switchNameHandler = () => {
  //   this.setState({persons: [
  //     {name: 'Ken', age: 10}
  //   ]
  // })
  // }
  nameChangedHandler = (event, id) => {

    // to find and hold the index of the person
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //get the person itself
    // why we do this? 
    const person = { ...this.state.persons[personIndex] } 

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  }

  deletePersonHandler = (personIndex) => {
    //reference type
    // slice returns a new copy of array
    // const persons = this.state.persons.slice();
    // a copy of the array
    const persons = [...this.state.persons];
    // remove one element from the element
    persons.splice(personIndex, 1); 
    this.setState({persons : persons});
  }

  toggleShowPerson = () => {
    this.setState({showPerson : !this.state.showPerson});
  }

  
  render() {
    const style = {
      backgroundColor: 'white',
    }

    let person = null;
    if(this.state.showPerson) {
      person = (
        <div>
        {/* execute every element in the array */}
          {this.state.persons.map((person, index) => {
              return (
                <Person 
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                /> 
              )
            })
          }
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I am react app!</h1>
        <button onClick={this.toggleShowPerson}>Switch Name</button>
        {person}
      </div>
    );
  }
}

export default App;


/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        /> */
/* <Person name={personState.persons[1].name} age={personState.persons[1].age}> HELLO </Person> */ 
    // return (
    //   <div className="App">
    //     <h1>Hi, I am react app!</h1>
    //     <button onClick={switchNameHandler}>Switch Name</button>
    //     <Person 
    //       name={personState.persons[0].name} 
    //       age={personState.persons[0].age}
    //       click = {switchNameHandler}
    //     /> 
    //     {/* <Person name={personState.persons[1].name} age={personState.persons[1].age}> HELLO </Person> */}
    //   </div>
    // );
    //return React.createElement('div', null, React.createElement('h1', null, 'Hi, I am react app!'));
// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, I am react app!</h1>
//       <button>Switch Name</button>
//       <Person name="Max" age="28"> HELLO </Person>

//     </div>
//   );
// }