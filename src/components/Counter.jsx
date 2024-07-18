import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1); // Initialize incrementBy

    function increase() {
        setCount(count + incrementBy); // Use incrementBy here
    }

    function decrease() {
        setCount(count - incrementBy); // Use incrementBy here
    }

    function increaseBy() {
        setIncrementBy(incrementBy + 1);
    }

    return (
        <div>
            <button onClick={increaseBy}>Add</button>
            <h2>Increase/Decrease By: {incrementBy}</h2>
            <h2>Counter: {count}</h2>
            <button onClick={increase}>Add</button>
            <button onClick={decrease}>Deduct</button>
        </div>
    );
}
