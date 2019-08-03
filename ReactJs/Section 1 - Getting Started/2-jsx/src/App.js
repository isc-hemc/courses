import React, { Component } from 'react';
import './App.css'

// We need to import 'React' because it's used behaind the scenes when the application 
// it is compiled. It allow us to use JSX, which is syntactical sugar, if we didn't
// use JSX out components should look like this...

class App extends Component {
  render() {
    // return (
    //  <div className="person">
    //    <h1>Hello, David!</h1>
    //  </div>
    // );
    return React.createElement('div', { className: 'App' }, React.createElement(
      'h1', null, 'This is how describing a component looks like without JSX.'
    ));
  }
}

export default App;
