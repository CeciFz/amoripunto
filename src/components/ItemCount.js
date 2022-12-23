import React, { useState } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {
    const [cant, setCant] = useState(initial);

    

    return (
        <div className="flex gap-4">
            <div className="flex justify-items-center border border-[#00df9a]">
                <button
                    className="w-10 h-8 text-xl text-[#00df9a] hover:bg-[#00df9a] hover:text-white"
                    onClick={() => setCant(cant - 1)}
                    disabled={cant === initial}
                >
                -
                </button>
                <span className="w-10 text-center text-xl py-0.5">{cant}</span>
                <button
                    className="w-10 text-xl h-8 text-[#00df9a] hover:bg-[#00df9a] hover:text-white "
                    onClick={() => setCant(cant + 1)}
                    disabled={cant === stock}
                >
                +
                </button>
            </div>
            <button 
                className= "font-bold px-4 rounded-full bg-[#00df9a] tracking-wide"
                onClick={() => onAdd(cant)}
            >
            Agregar a tu bolsa
            </button>
        </div>
    );
};

export default ItemCount;
