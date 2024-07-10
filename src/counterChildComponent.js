import React from "react";
import './timer.css';


const CounterChildComponent =({count, increment, decrement}) => {
    return(
        <>
            <div>
                <h1>Current count: {count}</h1>
                <button className="counterButton1" onClick={increment}>Child Increment</button>
                <button className="counterButton2" onClick={decrement}>Child Decrement</button>
    

            </div>
        </>
    );
};

export default CounterChildComponent;