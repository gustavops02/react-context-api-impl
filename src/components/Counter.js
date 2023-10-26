import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter(props) {

    const counter = useSelector((state) => {
        return state;
    })
    const dispatch = useDispatch()

    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => { dispatch({type: 'DECREMENT'}) }}>-</button>
            <button onClick={() => { dispatch({type:'INCREMENT'}) }}>+</button>
        </div>
    )
}