import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
// INITIALISE ALL TYPES OF STATE YOUR APP
// INITIAL STATE IS OFFERED TO CONTEXT AS A MEANS TO KEEP TRACK OF
const initialState = {
    emailAuthToken: null,
    authToken: null
};

export const Context = createContext(initialState);

// OUR STORE CONTAINS TWO VALUES
// STATE, WHICH HOLDS ALL SAVED DATA, AND
// DISPATCH, WHICH OFFERS A METHOD TO UPDATE OUR STATE
export const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState, null);

    return (
        <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    );
};

export default { Context, Store, initialState };