import React from "react";
import styled from "./Product.module.css";
//Module for import CSS styles is bettrer and requiment for import css and style in compont
//when you use this method, all of styles only use in selected component
const Products = ({ price, name, onDelete }) => {
    return (
        <div className={styled.product}>
            <h3 className={styled.product__title}>{name}</h3>
            <p>
                Price : <span className={styled.product__price}>{price}</span>
            </p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Products;
