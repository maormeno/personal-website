import {useState} from 'react';

export default function Counter () {
    const [count, setCount] = useState(0);

    const increaseCounter = () => {setCount(count + 1)}
    return (
        <div>

            <div style={{color: 'silver'}}> counter = {count} </div>
            <button onClick={increaseCounter}> Increase </button>

        </div>
    )
}