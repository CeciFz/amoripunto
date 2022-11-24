import React from "react";


const ItemDetail = ({ item }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-4">
            <img className="w-max" src={item.img} alt="articulo" />
            <span className="text-white text-center">{item.name}</span>
        </div>
    );
};

export default ItemDetail;