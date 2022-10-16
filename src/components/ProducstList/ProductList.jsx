import React from "react";
import Products from "../ProductCards/Products";
import "./productList.style.css";
import {
    useProducts,
    useProductsActions,
} from "../ProductCards/ProductsProvider";

const ProductList = () => {
    const product = useProducts();
    const dispatch = useProductsActions();
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
                            onDelete={() =>
                                dispatch({ type: "delete", id: item.id })
                            }
                            increamentCounter={() =>
                                dispatch({ type: "increment", id: item.id })
                            }
                            decrementCouter={() =>
                                dispatch({ type: "decrement", id: item.id })
                            }
                            changeInputHandler={(event) =>
                                dispatch({
                                    type: "changeInput",
                                    id: item.id,
                                    event: event,
                                })
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
