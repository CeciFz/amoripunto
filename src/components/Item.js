import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const Item = ({ product }) => {
  const [ imgItem, setImgItem ] = useState(null);
  const storage = getStorage();
  const imgRef = ref(storage , `images/${product.category}/${product.img[0]}`);

  useEffect(() => {
    getDownloadURL(imgRef)
    .then( img => setImgItem(img) )
    .catch( error => console.error(error) )
  }, [product]);

  


    return (
      <Link to={`/ItemDetail/${product.id}`} >
        <img src={imgItem} className="w-80 h-80 object-cover" alt="Product" />
        <span className="text-base">{product.name}</span>
      </Link>
    );
  };
  
  export default Item;