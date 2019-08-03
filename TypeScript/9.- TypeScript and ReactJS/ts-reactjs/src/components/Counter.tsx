import * as React from 'react';

interface ICounterProps {
    counter: number;
}

const counter = (props: ICounterProps) => {
    return (
        <p>{ props.counter }</p>
    );
}

export default counter;