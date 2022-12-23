import React from "react";
import ItemDetail from "./ItemDetail";
import useGetProducts from "../hooks/useGetProduct";

function ItemDetailContainer () {
    const { products } = useGetProducts();

    const renderItemDetail = () => {
        return (
            <div className = "container mt-9 mx-auto">
                <ItemDetail product = { products[0] } /> 
            </div>
        )
    };

    return products[0] && renderItemDetail();

}; 

export default ItemDetailContainer;