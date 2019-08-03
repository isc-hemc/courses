import React, { Component } from 'react';
import Person from './Person/Person';

/* State only works with class-based components that extends from 'Component'.
 * Whereas 'props' are set and passed from outside into the 'Person' component,
 * state is managed from inside a component
 */
class App extends Component {
  state = {
    persons: [
      { name: "David", age: 24 },
      { name: "Lily", age: 30 }
    ]
  }
  render() {
     return (
      <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
     );
  }
}

export default App;
