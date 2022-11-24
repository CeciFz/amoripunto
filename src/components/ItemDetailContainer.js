import React from "react";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer ({ product }) {

    return (
        <div className = "container mt-9 mx-auto">
            <ItemDetail product = { product } /> 
        </div>
    );
}; 

export default ItemDetailContainer;