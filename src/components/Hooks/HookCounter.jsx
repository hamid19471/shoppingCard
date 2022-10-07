import React, { useState } from "react";

const HookCounter = () => {
    const [count, setCount] = useState(0);
    const counterHandler = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={counterHandler}>Increase</button>
        </div>
    );
};

export default HookCounter;
