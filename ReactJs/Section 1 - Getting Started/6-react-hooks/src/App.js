import React, { useState } from 'react';
import Person from './Person/Person';


 /* 'useState' is the 'Hook' that allows us to manage 'state' in a functional component.
  * 'useState' returns an array with exactly two element, the current 'state' and a 
  * function that allows us to update this 'state' an re-render the component. An
  * important thing to keep in mind is that, in this case, 'setPersonState' does
  * not merge whatever it is with the old 'state' like 'setState' in class-based
  * components, 'React Hooks' replace the old 'state' with the new one.
  */

const app = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "David", age: 24 },
      { name: "Lily", age: 30 }
    ],
    name: 'David',
    age: '24',
    switcher: 0
  });

  const switchHandler = () => {
    let switcher = (personState.switcher === 0) ? 1 : 0;
    let persons = personState.persons;
    setPersonState({
      persons: persons,
      name: persons[switcher].name,
      age: persons[switcher].age,
      switcher: switcher
    });
  }

  return (
  <div>
    <Person name={personState.name} age={personState.age} />
    <br />
    <button onClick={switchHandler}>Switch person!</button>
  </div>
  );
}

export default app;