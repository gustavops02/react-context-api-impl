import React, { useState, createContext } from "react";


export const CounterContext = createContext();

export function CounterProvider(props) {

    return (
        <CounterContext.Provider>
            {props.children}
        </CounterContext.Provider>


    )
}