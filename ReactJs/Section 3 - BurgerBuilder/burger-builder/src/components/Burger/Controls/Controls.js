import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './Controls.css';

const newControl = [
    {label: 'Salad', type: 'salad' },
    {label: 'Meat', type: 'meat' },
    {label: 'Cheese', type: 'cheese' },
    {label: 'Bacon', type: 'bacon' },
];

const controls = (props) =>  (
    <div className='Controls'>
        <p>Burger Price: <strong>${props.price}</strong></p>
        { 
            newControl.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.addIngredient(ctrl.type)}
                    removed={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}>
                </BuildControl>
            ))
        }
        <button className='OrderButton' disabled={props.purchasable}>ORDER NOW</button>
    </div>
);

export default controls;