import React, { useState, useEffect } from "react";

const CounterFunction = () => {
    const [count, setCont] = useState(0);
    //use useEffect hooks for control update and mount state
    //use return for unmount component and stop everythings : REALY IMPORTANT
    useEffect(() => {
        const myTimer = setInterval(() => {
            console.log("there is COUNT updated state by useEffect");
            setCont(count + 1);
        }, 1000);
        return () => {
            clearInterval(myTimer);
        };
    });
    return (
        <div>
            <p>Couter is : {count}</p>
        </div>
    );
};

export default CounterFunction;
