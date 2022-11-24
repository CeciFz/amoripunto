import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { item as itemMock } from "../mocks/item.mock";

function ItemDetailContainer () {
    const [item, setItem] =  useState(null);

    useEffect(() => {
        new Promise((resolve) => setTimeout( () => resolve(itemMock[0]), 2000)).then((data) => setItem(data));
    }, []);

    if ( !item ){
        return <p> Loading... </p>
    }

    return (
        <div>
        <ItemDetail item = {item} />
        </div>
    );
}; 

export default ItemDetailContainer;