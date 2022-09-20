import React, {useState, useCallback} from "react";
import './style.scss'
import ReactCounterChild from "../ReactCounterChild";


export default function ReactCounter(props) {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState('');

    const updateCounterFromChild = useCallback(() => setCounter(counter + 1), [counter]);

    return (
        <>
            <div className="counter">
                <h3>Add more Reacts by clicking the button below!</h3>
                <div className="counter__counterWrapper">
                    <button onClick={() => setCounter(counter + 1)}>Click me!</button>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <p>{counter}</p>
                </div>
                <ReactCounterChild counter={counter} updateCounter={updateCounterFromChild}/>
            </div>
        </>
    )
}