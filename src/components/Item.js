import React from "react";
import { Link } from "react-router-dom";
import useGetImage from "../hooks/useGetImage";

const Item = ({ product }) => {
  const imgItems = useGetImage(product);
  

    return (
      <Link to={`../Detalle/${product.id}`} >
        <img src={imgItems.length > 0 ? imgItems[0] :"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png" } className="w-80 h-80 object-cover" alt="Product" />
        <span className="text-base">{product.name}</span>
      </Link>
    );
  };
  
  export default Item;