import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'David', age: 24 },
      { id: 2, name: 'Lily', age: 30 }
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
    let content = null;

    if(this.state.showPerson) {
      content = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person 
                name={person.name} 
                age={person.age}
                key={person.id} />
            )
          })}
        </div>
      );
    }

    return (
    <div>
      <button onClick={this.showPersonHandler}>{this.state.buttonText}</button>
      {content}
    </div>
    );
  }
}

export default App;
