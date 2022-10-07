import React from "react";
import "./App.css";
import ProductList from "./components/ProducstList/ProductList";

function App() {
    return (
        <div className="container">
            <div className="app__heading">
                <h1>Shopping Application</h1>
                <p>WELCOME TO FIRST APP CREATED BY REACT</p>
            </div>
            <div>
                <ProductList />
            </div>
        </div>
    );
}

export default App;
