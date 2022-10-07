import React from "react";

const Products = ({ price, name }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    );
};

export default Products;
