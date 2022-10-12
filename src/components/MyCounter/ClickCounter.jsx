import React from "react";
import WithCounter from "../hoc/withCounter";

const ClickCounter = ({ count, counterHandler }) => {
    return (
        <div>
            <h2 onClick={counterHandler}>Clicked {count} times</h2>
        </div>
    );
};

export default WithCounter(ClickCounter);
