import React from 'react';
import Ingredients from './Ingredients/Ingredients';
import './Burger.css';

const burger = (props) => {
    let getIngredients = Object.keys(props.ingredients)
        .map(ingredient => {
            return [...Array(props.ingredients[ingredient])].map((_, i) => {
                return ( 
                    <Ingredients
                        key={ingredient + i}
                        type={ingredient}>
                    </Ingredients>
                );
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(getIngredients.length === 0) {
        getIngredients = <p>Add your ingredients...</p>
    }
    
    return (
        <div className='BurgerContainer'>
            <Ingredients type='breadTop'></Ingredients>
                {getIngredients}
            <Ingredients type='breadBottom'></Ingredients>
        </div>
    );
};

export default burger;