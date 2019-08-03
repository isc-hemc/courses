import React, { useState } from 'react';
import Burger from '@/components/Burger/Burger';
import Controls from '@/components/Burger/Controls/Controls';
import Aux from '@/high-order-components/Aux';


const INGREDIENTS_PRICES = {
    salad: 0.5,
    bacon: 2.0,
    meat: 1.5,
    cheese: 1.0
}

const burgerBuilder = () => {
    let [burgerState, setBurgerState] = useState({
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        price: 4.0,
        notPurchasable: true
    });

    let isPurchasable = () => {
        let purchasable = Object.keys(burgerState.ingredients)
            .map(key => burgerState.ingredients[key])
            .reduce((sum, el) => sum + el, 0) <= 0;
        return purchasable;
    };

    let addIngredientHandler = (type) => {
        let newState = burgerState;
        let counter = newState.ingredients[type];
        newState.ingredients[type] = counter + 1;
        newState.price = newState.price + INGREDIENTS_PRICES[type];
        newState.notPurchasable = isPurchasable();
        setBurgerState(() => {
            return {...burgerState, ...newState}
        });
    };

    let removeIngredientHandler = (type) => {
        let newState = burgerState;
        let counter = newState.ingredients[type];
        newState.ingredients[type] = counter - 1;
        newState.price = newState.price + INGREDIENTS_PRICES[type];
        newState.notPurchasable = isPurchasable();
        setBurgerState(() => {
            return {...burgerState, ...newState}
        });
    };

    let disableInfo = {
        ...burgerState.ingredients
    };
    for(let key in disableInfo) {
        disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
        <Aux>
            <Burger ingredients={burgerState.ingredients}></Burger>
            <Controls
                addIngredient={addIngredientHandler}
                removeIngredient={removeIngredientHandler}
                disabled={disableInfo}
                price={burgerState.price}
                purchasable={burgerState.notPurchasable}>
            </Controls>
        </Aux>
    );
}

export default burgerBuilder;