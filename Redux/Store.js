import React from 'react';
// import { configureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'; 
import cartItems from './Reducers/cartItem';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger'


const reducers = combineReducers({
    // cartReducer
    cartItems: cartItems
})

// const _store = configureStore( reducers);

const store  = createStore(
    reducers,
    // applyMiddleware(ThunkMiddleware, logger)
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
)

export default store;