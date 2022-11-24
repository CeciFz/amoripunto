import React from "react";


const ItemDetail = ({ product }) => {
    return (
        <div className="flex items-center justify-center flex-wrap gap-9 ">
            <img className="w-80 rounded md:mx-4 " src={product.img} alt="articulo" />
            <div className="flex flex-col justify-center lg:items-start gap4 text-lg md:items-center">
                <span className="text-white text-center">{product.name}</span>
                <span className="text-white text-center">{product.description}</span>
                <span className="text-white text-center">{product.precio}</span>
                <button className= "font-bold mt-8 p-2 px-4 rounded-full bg-[#00df9a]"> Agregar al carrito </button>
            </div>
        </div>
    );
};

export default ItemDetail;