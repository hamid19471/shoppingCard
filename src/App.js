import React from "react";
import "./App.css";
import HookCounter from "./components/Hooks/HookCounter";
import Products from "./components/Products/Products";

function App() {
    const data = [
        {
            title: "MacBook Air 2021",
            price: "899.00$",
        },
        {
            title: "MacBook Pro 2021",
            price: "1100.00$",
        },
        {
            title: "iMac 2021",
            price: "2100.00$",
        },
    ];

    return (
        <div>
            <div>
                {data.map((item) => (
                    <Products
                        key={item.title}
                        price={item.price}
                        name={item.title}
                    />
                ))}
            </div>
            <div>
                <button>Change Data</button>
            </div>
            <HookCounter />
        </div>
    );
}

export default App;
