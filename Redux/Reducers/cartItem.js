import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../constants';

const cartItems = (state = [], action) =>{
    switch (action.type){
        case 'ADD_TO_CART' : 
            console.log("action state....", state)
            console.log("action upgrade state....", [...state])
            return [...state, action.payload]

        case REMOVE_FROM_CART : 
            return state.filter(cartItem => cartItem !== action.payload)

        case CLEAR_CART : 
            return state = []

    }
    return state;
}

export default cartItems;