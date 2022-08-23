import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../constants';

//calls action function and tells to reducer that state is updated  
export const addToCart = (payload) => {
    console.log("action taken")
    return {
        type : 'ADD_TO_CART',
        payload
    }
        
}

export const removeFromCart = (payload) => {
    return {
        type : REMOVE_FROM_CART,
        payload
    }
        
}

export const clearCart = () => {
    return {
        type : CLEAR_CART
    }
        
}

