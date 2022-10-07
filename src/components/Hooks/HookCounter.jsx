import React, { useState } from "react";

const HookCounter = () => {
    const [count, setCount] = useState(0);
    //is better to user callback function to update state for less error and problems
    // this way is better use when prev data of state is important for update
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
