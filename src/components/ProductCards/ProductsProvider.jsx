import React, { useContext, useReducer } from "react";
import { ProductsData } from "../Db/Db";
const ProductsContext = React.createContext();
const ProductsContexDispacher = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "delete":
            const deleteResult = state.filter((item) => item.id !== action.id);
            return deleteResult;
        case "increment":
            const incrementResult = state.map((item) =>
                item.id === action.id
                    ? { ...item, quantity: item.quantity++ }
                    : item
            );
            return incrementResult;
        case "decrement":
            const findItem = state.find((item) => item.id === action.id);
            if (findItem.quantity > 1) {
                const decrementResult = state.map((item) =>
                    item.id === action.id
                        ? { ...item, quantity: item.quantity-- }
                        : item
                );
                return decrementResult;
            } else {
                const decrementResultDelete = state.filter(
                    (item) => item.id !== action.id
                );
                return decrementResultDelete;
            }
        case "changeInput":
            const findChageInputId = state.find(
                (item) => item.id === action.id
            );
            if (findChageInputId.id === action.id) {
                const changeInputResult = state.map((item) =>
                    item.id === action.id
                        ? { ...item, title: action.event.target.value }
                        : item
                );
                return changeInputResult;
            }
            break;
        default:
            return state;
    }
};
const ProductsProvider = ({ children }) => {
    const [product, dispatch] = useReducer(reducer, ProductsData);
    return (
        <>
            <ProductsContext.Provider value={product}>
                <ProductsContexDispacher.Provider value={dispatch}>
                    {children}
                </ProductsContexDispacher.Provider>
            </ProductsContext.Provider>
        </>
    );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => {
    return useContext(ProductsContexDispacher);
};
