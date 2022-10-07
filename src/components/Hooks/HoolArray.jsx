import React, { useState } from "react";

const HoolArray = () => {
    const [items, setItems] = useState([]);
    const addNumberHandler = () => {
        setItems([
            ...items,
            {
                id: items.length,
                number: Math.floor(Math.random() * 100),
            },
        ]);
    };
    return (
        <div>
            <button onClick={addNumberHandler}>Add New Number</button>
            {items.map((item) => (
                <li key={item.id}>{item.number}</li>
            ))}
        </div>
    );
};

export default HoolArray;
