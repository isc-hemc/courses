import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person">
            <h1>My name is {props.name}!</h1>
            <br />
            <p>I'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;