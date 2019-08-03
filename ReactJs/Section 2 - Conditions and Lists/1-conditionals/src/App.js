import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'David', age: 24 },
      { name: 'Lily', age: 30 }
    ],
    buttonText: 'Show persons!',
    showPerson: false
  }

  showPersonHandler = () => {
    this.setState({
      buttonText: this.state.showPerson ? 'Show persons!' : 'Hide persons!',
      showPerson: this.state.showPerson ? false : true
    });
  }

  render() {
    let persons = null;

    if(this.state.showPerson) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        </div>
      );
    }

    return (
    <div>
      {persons}
      <br />
      <button onClick={this.showPersonHandler}>{this.state.buttonText}</button>
    </div>
    );
  }
}

export default App;
