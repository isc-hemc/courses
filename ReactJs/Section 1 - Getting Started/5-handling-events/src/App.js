import React, { Component } from 'react';
import Person from './Person/Person';


 /* 'setState' allows us to update the special property 'state' and gets ensure that React 
  * knows about this update and updates the DOM. 'setState' takes an object as parameter and
  * will merge whatever is defined there with the existing data in the 'state' property.
  */

class App extends Component {
  state = {
    persons: [
      { name: "David", age: 24 },
      { name: "Lily", age: 30 }
    ],
    name: 'David',
    age: '24',
    switcher: 0
  }

  switchHandler = () => {
    let switcher = (this.state.switcher == 0) ? 1 : 0;
    let persons = this.state.persons;
    this.setState({
      name: persons[switcher].name,
      age: persons[switcher].age,
      switcher: switcher
    });
  }

  render() {
     return (
      <div>
        <Person name={this.state.name} age={this.state.age} />
        <br />
        <button onClick={this.switchHandler}>Switch person!</button>
      </div>
     );
  }
}

export default App;
