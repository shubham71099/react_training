import React, {useState} from "react";
import './App.css';

function Counter(){

    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    };
    const decrement = () => {
        setCount(count-1);
    };

    return (
    
    <div class="counter">
        <div class="count">{count}</div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </div>
    
    );
}

export default Counter;