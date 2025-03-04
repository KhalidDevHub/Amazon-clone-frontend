import React, {createContext, useReducer} from "react";

export const DateContext = createContext();

export const DateProvider = ({children,reducer,initialState}) => {
    return (
        <DateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DateContext.Provider>
    );
};