import React from "react";
import ItemList from "./ItemList";
import useGetProducts from "../hooks/useGetProduct";


function ItemListContainer () {   
    const { products } = useGetProducts();


    return (
        <div className = "w-90">
            <ItemList products = { products } /> 
        </div>
    );
}; 

export default ItemListContainer;