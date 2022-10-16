import React, { useState } from "react";
import { BiCartAlt, BiUser } from "react-icons/bi";
import { useProductsActions } from "../ProductCards/ProductsProvider";
import "./NavBar.css";
const NavBar = () => {
    const [click, setClick] = useState(false);
    const clickHandler = () => setClick(!click);
    const { totalProducts, totalPrice } = useProductsActions();
    return (
        <header className="navbar">
            <div className="navbar__logo">APP-STORE.</div>
            <div className="navbar__menuitems">
                <ul className="navbar__item">
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="navbar__icons">
                <BiCartAlt
                    onMouseDown={clickHandler}
                    className="navbar__cart"
                />
                <span className={!click ? "navbar__badget" : "price__badget"}>
                    {!click ? totalProducts : "Price is :" + totalPrice + " $"}
                </span>
                <BiUser className="navbar__user" />
            </div>
        </header>
    );
};

export default NavBar;
