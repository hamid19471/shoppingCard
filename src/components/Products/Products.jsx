import React from "react";
import styled from "./Product.module.css";
//Module for import CSS styles is bettrer and requiment for import css and style in compont
//when you use this method, all of styles only use in selected component
const Products = ({ price, name }) => {
    return (
        <div className={styled.product}>
            <h1>{name}</h1>
            <p>Price : {price}</p>
        </div>
    );
};

export default Products;
