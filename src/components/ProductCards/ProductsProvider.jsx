import React, { useState, useContext, useReducer } from "react";
import { ProductsData } from "../Db/Db";
const ProductsContext = React.createContext();
const ProductsContexDispacher = React.createContext();

const ProductsProvider = ({ children }) => {
    const [product, setProduct] = useState(ProductsData);
    return (
        <>
            <ProductsContext.Provider value={product}>
                <ProductsContexDispacher.Provider value={setProduct}>
                    {children}
                </ProductsContexDispacher.Provider>
            </ProductsContext.Provider>
        </>
    );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => {
    const setProduct = useContext(ProductsContexDispacher);
    const product = useContext(ProductsContext);
    const onDeleteHandler = (id) => {
        setProduct(product.filter((item) => item.id !== id));
    };
    const increamentHandler = (id) => {
        setProduct((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const chandeProductNameHandler = (event, id) => {
        const findItem = product.find((item) => item.id === id);
        if (findItem.id === id) {
            setProduct((prev) =>
                prev.map((item) =>
                    item.id === id
                        ? { ...item, title: event.target.value }
                        : item
                )
            );
        }
    };

    const decrementHandler = (id) => {
        const findItem = product.find((item) => item.id === id);
        if (findItem.quantity > 1) {
            setProduct((prev) =>
                prev.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        } else {
            setProduct((prev) => prev.filter((item) => item.id !== id));
        }
    };
    const totalPrice = product.reduce(
        (prev, items) => (prev + items.price) * items.quantity,
        0
    );
    const totalProducts = product.reduce(
        (prev, items) => prev + items.quantity,
        0
    );

    return {
        decrementHandler,
        increamentHandler,
        chandeProductNameHandler,
        onDeleteHandler,
        totalPrice,
        totalProducts,
    };
};
