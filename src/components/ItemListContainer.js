import React from "react";
import ItemList from "./ItemList";

function ItemListContainer ({ products }) {   

    return (
        <div className = "w-90">
        <ItemList products = { products } /> 
        {/* <p className="text-white flex justify-center items-center text-3xl h-80 text-center"> {greeting} </p> */}
        </div>
    );
}; 

export default ItemListContainer;