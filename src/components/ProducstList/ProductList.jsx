import React from "react";
import Products from "../ProductCards/Products";
import "./productList.style.css";
import {
    useProducts,
    useProductsActions,
} from "../ProductCards/ProductsProvider";

const ProductList = () => {
    const product = useProducts();
    const {
        increamentHandler,
        decrementHandler,
        chandeProductNameHandler,
        onDeleteHandler,
    } = useProductsActions();
    return (
        <div>
            <div className="app__heading">
                <h1>Shopping Application</h1>
                <p>WELCOME TO FIRST APP CREATED BY REACT</p>
            </div>
            {product.length ? (
                <div>
                    {product.map((item) => (
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
            ) : (
                <div>
                    <h2>there is no product in your basket</h2>
                    <p>Go to Shopping for select product</p>
                </div>
            )}
        </div>
    );
};

export default ProductList;
