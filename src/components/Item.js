import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {


    return (
      <Link to={`/ItemDetail/${product.id}`} >
        <img src={product.img} className="w-40 h-40" alt="Product" />
        <span className="text-base">{product.name}</span>
      </Link>
    );
  };
  
  export default Item;