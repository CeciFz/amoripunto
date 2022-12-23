import React from "react";
import { Link } from "react-router-dom";
import useGetImage from "../hooks/useGetImage";

const Item = ({ product }) => {
  //const imgItems = useGetImage(product);
    
  const imgItems = 
["https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Im8wbIep91pEsSjn_XpZrMRkpoK7Sc6U9ks2a4R_G0gYO0DLWMrPRHNbXVYbZ3f2oSw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-aQUrqD1ntsg-H-FfwoRh250EhZxnKLMX2g&usqp=CAU"];

    return (
      <Link to={`../Detalle/${product.id}`} >
        <img src={imgItems[0]} className="w-80 h-80 object-cover" alt="Product" />
        <span className="text-base">{product.name}</span>
      </Link>
    );
  };
  
  export default Item;