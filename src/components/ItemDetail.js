import React, {useContext, useState} from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import useGetImage from "../hooks/useGetImage";


const ItemDetail = ({ product }) => {
    const imgItems = useGetImage(product);
    const [color, setColor] = useState(product.color[0]);
    const { addItem, isInCart } = useContext(CartContext);
    const [currentStock, setCurrentStock] = useState(product.stock);

    function onAdd(cant) {
        if (currentStock < cant) alert("No hay suficiente stock de este producto");
        else {
            setCurrentStock(currentStock - cant);
            addItem(product, cant);
        }
    }

    const renderColours = () => {
        return (
            <select onSelect={(e) => setColor(e.target.value)} className=" border-[#00df9a] rounded"> 
                {product.color.map( (color) => <option value={color}> {color} </option>) }
            </select>
    )};


    
    return (
        <div className="flex items-center justify-center max-md:flex-wrap gap-5">
            <div className="flex flex-col justify-center items-center gap-3">            
                <h2 className="text-white" > {product.name} </h2>
                <img className="w-80 rounded md:mx-4 " src={imgItems.length > 0 ? imgItems[0] :"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"} alt="articulo" />
            </div>
            <div className="md:max-w-[50%] mx-4 flex flex-col justify-center items-start gap-3 max-md:gap-5 text-lg max-md:items-center text-white text-justify max-md:text-center">
                <span className="uppercase">{`${product.category}  -  ${product.name}`}</span>
                <span>$ {product.precio} .-</span>
                <hr className="w-full border-[#00df9a] mb-4"/>
                <span> {product.description}</span>
                <span>
                    <label className="mr-4">COLORES:</label>
                    {renderColours()}
                </span>
                {product.stock > 0 ? 
                    <ItemCount stock={product.stock} initial = {1} onAdd={onAdd} /> :
                    <button 
                        className= "font-bold px-4 rounded-full bg-[#00df9a] opacity-10 tracking-wide"
                        disabled
                    >
                    Sin Stock
                    </button>
                }
            </div>
        </div>
    );
};

export default ItemDetail;