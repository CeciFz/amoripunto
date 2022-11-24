import React from "react";

const Item = ({ product }) => {
    return (
      <div >
        <img src={product.img} className="w-40 h-40" alt="Product" />
        <span className="text-base">{product.name}</span>
      </div>
    );
  };
  
  export default Item;