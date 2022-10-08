import React from "react";
import Products from "../ProductCards/Products";

const ProductList = ({
    product,
    onDelete,
    increamentCounter,
    decreationCounter,
    changeInputHandler,
}) => {
    return (
        <div>
            {product.length ? (
                <div>
                    {product.map((item) => (
                        <Products
                            product={item}
                            onDelete={() => onDelete(item.id)}
                            increamentCounter={() => increamentCounter(item.id)}
                            decrementCouter={() => decreationCounter(item.id)}
                            changeInputHandler={(event) =>
                                changeInputHandler(event, item.id)
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
