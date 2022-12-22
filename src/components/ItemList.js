import React from "react";
import Item from "./Item";

function ItemList({ products }) {
    return (
        <div className = "flex justify-evenly gap-y-16 items-center flex-wrap">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
}; 

export default ItemList;