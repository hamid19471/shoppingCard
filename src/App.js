import React from "react";
import "./App.css";
import ProductList from "./components/ProducstList/ProductList";

function App() {
    return (
        <div className="container">
            <div>
                <ProductList />
                <button>Change Data</button>
            </div>
        </div>
    );
}

export default App;
