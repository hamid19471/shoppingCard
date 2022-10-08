import React from "react";
import styled from "./Product.module.css";
import { BiTrash } from "react-icons/bi";
//Module for import CSS styles is bettrer and requiment for import css and style in compont
//when you use this method, all of styles only use in selected component
const Products = ({
    onDelete,
    product,
    increamentCounter,
    changeInputHandler,
    decrementCouter,
}) => {
    return (
        <div className={styled.product}>
            <h3 className={styled.product__title}>{product.title}</h3>
            <p>
                Price :
                <span className={styled.product__price}>{product.price}</span>
            </p>
            <input
                type="text"
                id="productName"
                name="productName"
                onChange={changeInputHandler}
                value={product.title}
            />
            <button
                className={`${styled.product__button} ${
                    product.quantity > 1
                        ? styled.product__quantity_checking
                        : styled.product__decreament
                }`}
                onClick={decrementCouter}>
                {product.quantity > 1 ? "-" : <BiTrash />}
            </button>
            <span className={styled.product__quantity}>{product.quantity}</span>
            <button
                className={`${styled.product__button} ${styled.product__increament}`}
                onClick={increamentCounter}>
                +
            </button>
            <button className={styled.product__button} onClick={onDelete}>
                Delete <BiTrash />
            </button>
        </div>
    );
};

export default Products;
