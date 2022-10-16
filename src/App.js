import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProducstList/ProductList";
import ProductsProvider from "./components/ProductCards/ProductsProvider";

function App() {
    return (
        <div className="container">
            <ProductsProvider>
                <NavBar />
                <ProductList />
            </ProductsProvider>
        </div>
    );
}

export default App;
