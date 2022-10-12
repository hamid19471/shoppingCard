import React, { useState } from "react";

const WithCounter = (WrappedComponent) => {
    const IncrementHandler = () => {
        const [count, setCount] = useState(0);
        const counterHandler = () => {
            setCount(count + 1);
        };
        return (
            <WrappedComponent count={count} counterHandler={counterHandler} />
        );
    };
    return IncrementHandler;
};

export default WithCounter;
