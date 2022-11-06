import React from "react";

function ItemListContainer({ greeting }) {
    return (
        <div>
        <p className="text-white flex justify-center items-center text-3xl h-80 text-center"> {greeting} </p>
        </div>
    );
}; 

export default ItemListContainer;