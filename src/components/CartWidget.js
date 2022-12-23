import React, { useContext } from "react";
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
    const { productsAdded } = useContext(CartContext);
    const count = productsAdded.length;

    return (
        <Link to="/cart">
            <MdOutlineShoppingBag size={30}>
                {count > 0 &&  <span className="absolute w-4 h-4 bottom-0 -right-2 rounded-full flex justify-center items-center bg-white/70">
                                {count}
                                </span>}
            </MdOutlineShoppingBag>
        </Link>
    );
}; 

export default CartWidget;


