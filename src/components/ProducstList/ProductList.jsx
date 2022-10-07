import React, { useState } from "react";
import Products from "../ProductCards/Products";
const ProductList = () => {
    const [data, setDate] = useState([
        {
            id: 1,
            title: "MacBook Air 2021",
            price: "899.00 $",
        },
        {
            id: 2,
            title: "MacBook Pro 2021",
            price: "1100.00 $",
        },
        {
            id: 3,
            title: "iMac 2021",
            price: "2100.00 $",
        },
    ]);

    const onDeleteHandler = (id) => {
        setDate(data.filter((item) => item.id !== id));
    };
    return (
        <div>
            <div>
                {data.map((item) => (
                    <Products
                        key={item.id}
                        price={item.price}
                        name={item.title}
                        onDelete={() => onDeleteHandler(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
