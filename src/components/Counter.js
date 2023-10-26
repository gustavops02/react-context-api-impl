import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter(props) {

    const [count, setCount] = useContext(CounterContext)

    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => { dispatch({type: 'DECREMENT'}) }}>-</button>
            <button onClick={() => { dispatch({type:'INCREMENT'}) }}>+</button>
        </div>
    )
}