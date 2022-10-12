import React from "react";
import WithCounter from "../hoc/withCounter";

const HoverCounter = ({ count, counterHandler }) => {
    return (
        <div>
            <h2 onMouseOver={counterHandler}>Clicked {count} times</h2>
        </div>
    );
};

export default WithCounter(HoverCounter);
