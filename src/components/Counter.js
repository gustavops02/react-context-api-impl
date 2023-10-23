import React, { useContext, useState } from "react";
import { CounterContext } from "../context/CounterContext";

export default function Counter(props) {

    const [count, setCount] = useContext(CounterContext)

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => {setCount(prev => prev-1)}}>-</button>
            <button onClick={() => {setCount(prev => prev+1)}}>+</button>
        </div>
    )
}