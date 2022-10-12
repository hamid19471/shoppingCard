import React, { useState } from "react";
import "./App.css";
// import CounterFunction from "./components/CounterFunction/CounterFunction";
import ClickCounter from "./components/MyCounter/ClickCounter";
import HoverCount from "./components/MyCounter/HoverCounter";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProducstList/ProductList";

function App() {
    // const [show, setShow] = useState(false);
    const [data, setDate] = useState([
        {
            id: 1,
            title: "MacBook Air 2021",
            price: 899,
            quantity: 1,
        },
        {
            id: 2,
            title: "MacBook Pro 2021",
            price: 1100,
            quantity: 1,
        },
        {
            id: 3,
            title: "MacBook Pro 2022",
            price: 2100,
            quantity: 1,
        },
    ]);
    const onDeleteHandler = (id) => {
        setDate(data.filter((item) => item.id !== id));
    };
    const increamentHandler = (id) => {
        setDate((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const chandeProductNameHandler = (event, id) => {
        const findItem = data.find((item) => item.id === id);
        if (findItem.id === id) {
            setDate((prev) =>
                prev.map((item) =>
                    item.id === id
                        ? { ...item, title: event.target.value }
                        : item
                )
            );
        }
    };

    const decrementHandler = (id) => {
        const findItem = data.find((item) => item.id === id);
        if (findItem.quantity > 1) {
            setDate((prev) =>
                prev.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        } else {
            setDate((prev) => prev.filter((item) => item.id !== id));
        }
    };

    const totalProducts = data.reduce(
        (prev, items) => prev + items.quantity,
        0
    );
    const totalPrice = data.reduce(
        (prev, items) => (prev + items.price) * items.quantity,
        0
    );
    return (
        <div className="container">
            <NavBar totalProducts={totalProducts} totalPrice={totalPrice} />
            <div className="app__heading">
                <h1>Shopping Application</h1>
                <p>WELCOME TO FIRST APP CREATED BY REACT</p>
            </div>
            <div>
                <ProductList
                    product={data}
                    onDelete={onDeleteHandler}
                    increamentCounter={increamentHandler}
                    decreationCounter={decrementHandler}
                    changeInputHandler={chandeProductNameHandler}
                />
            </div>
            {/* <button onClick={() => setShow(!show)}>
                {show ? "SHOW" : "HIDE"}
            </button>
            {!show && <CounterFunction />} */}
            {/* <ClickCounter />
            <HoverCount /> */}
        </div>
    );
}

export default App;
