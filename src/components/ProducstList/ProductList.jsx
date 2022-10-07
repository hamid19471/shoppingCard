import React, { useState } from "react";
import Products from "../ProductCards/Products";
const ProductList = () => {
    const [data, setDate] = useState([
        {
            id: 1,
            title: "MacBook Air 2021",
            price: "899.00 $",
            quantity: 1,
        },
        {
            id: 2,
            title: "MacBook Pro 2021",
            price: "1100.00 $",
            quantity: 1,
        },
        {
            id: 3,
            title: "MacBook Pro 2022",
            price: "2100.00 $",
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
    return (
        <div>
            <div>
                {data.map((item) => (
                    <Products
                        product={item}
                        onDelete={() => onDeleteHandler(item.id)}
                        increamentCounter={() => increamentHandler(item.id)}
                        decrementCouter={() => decrementHandler(item.id)}
                        changeInputHandler={(event) =>
                            chandeProductNameHandler(event, item.id)
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
