import { useState, useEffect } from "react";
import { getDownloadURL, listAll, getStorage, ref } from "firebase/storage";


const useGetImage = ( product ) => {
    const [ imgItems, setImgItems ] = useState([]);
    const storage = getStorage();
    const { category, img } = product;

    //const imgRef = img.map( image => ref(storage , `images/${category}/${image}`));

    useEffect(() => {
        fetchImages();
    }, []); 

    const fetchImages = async () => {
        //const imgRef = await img.map( image => ref(storage , `images/${category}/${image}`));
        console.log("fetch")
        const listRef = ref(storage, `images/${category}`);
        const result = await listAll(listRef);

        result.items.map( imageRef =>  getDownloadURL(imageRef)
            .then( res => {
                img.forEach(item => {
                    if( res.includes(item)){
                        setImgItems([...imgItems, res])
                    }
                })
            })
        );
    }

    return imgItems;
}


export default useGetImage;