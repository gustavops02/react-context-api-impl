import React, { useState } from "react";

export default function Counter(props) {

    const [count, setCount] = useState(0)


    return (
        <div>
            <div>{count}</div>
            <button onClick={() => {setCount(prev => prev-1)}}>-</button>
            <button onClick={() => {setCount(prev => prev+1)}}>+</button>
        </div>
    )
}