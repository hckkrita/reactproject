import React, {useState} from 'react';
import CounterChildComponent from './counterChildComponent';
import './timer.css';

const CounterParentComponent = () => {
    const[count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount +1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount -1);
    };

    return(
        <>
            <div className='counterContainer'>
                <CounterChildComponent count={count} increment={increment} decrement={decrement}/>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
    
            </div>
        </>
    )

};

export default CounterParentComponent

