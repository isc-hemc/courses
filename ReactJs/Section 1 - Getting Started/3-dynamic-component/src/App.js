import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  render() {
     return (
      <div>
        <Person name="David" age="24" />
        <Person name="Lily" age="30">And today is my birthday!</Person>
      </div>
     );
  }
}

export default App;
