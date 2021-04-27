import React from 'react'
import useCustomHook from './Custom'
export default function App() {

    const data = useCustomHook();
    const data2 = useCustomHook();
    return (
        <div>
            <h2>Increment: {data.count}</h2>
            <button type="submit" onClick={data.handleClick}>Increment</button>
            <br />
            <hr />
            <h2>Decrement2: {data2.count2}</h2>
            <button type="submit" onClick={data2.handleClick2}>Increment</button>
           
        </div>
    )
}
