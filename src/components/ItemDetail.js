import React from "react";


const ItemDetail = ({ product }) => {
    const { img } = product;
    
    return (
        <div className="flex items-center justify-center flex-wrap gap-9 ">
            {/* {img.map( i => <img className="w-80 rounded md:mx-4 " src={i} alt="articulo" />)} */}
            <img className="w-80 rounded md:mx-4 " src={img[0]} alt="articulo" />
            <div className="flex flex-col justify-center lg:items-start gap4 text-lg md:items-center">
                <span className="text-white text-center">{product.name}</span>
                <span className="text-white text-center">{product.description}</span>
                <span className="text-white text-center">$ {product.precio} .-</span>
                <span className="text-white text-center">Disponibles:  {product.stock}</span>
                <button className= "font-bold mt-8 p-2 px-4 rounded-full bg-[#00df9a]"> Agregar a tu bolsa </button>
            </div>
        </div>
    );
};

export default ItemDetail;