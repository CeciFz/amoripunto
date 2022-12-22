import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, query, where, getFirestore } from "firebase/firestore";

const useGetProducts = () => {
    const COLLECTION = "items";
    const { category, id } = useParams();
    const [products, setProducts] =  useState([]);
    const [categories, setCategories] =  useState([]);

    const db = getFirestore();

    //const itemCollection = collection(db, "items"); //Para traer una coleccion completa
    //const itemRef = doc(db, "items", id)  //Para traer un solo documento de la coleccion
    //como tienen parámetros en común, los agrupo en un [] y luego con ... los aplico a doc o collection según si hay id o no.

    const refProps = [ db, COLLECTION ];
    const ref = id ? doc(...refProps, id) : collection(...refProps);


    useEffect(() => { 
        if (id) {
            getDoc(ref).then( res => {
                if(res.exists()){
                    setProducts([{ id: id, ...res.data() }]);
                }
            })
            .catch( error => console.error(error))
            return;
        }
            
        if (category !== 'all') {

            const q = query(ref, where("category", "==", category));  // como hacemos filtro, primero debemos instanciarlo en una cte
            getDocs(q)
            .then( res => {
                const products = res.docs.map( doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setProducts(products);
            })
            .catch( error => console.error(error));
    
        } else {
            
            getDocs(ref)
            .then( res => {
                const products = res.docs.map( doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setProducts(products);

                const cat = new Set(products.map( product => product.category));
                setCategories( [...cat] );

            }).catch( error => console.error(error));
        }



    }, [ref, id, category]);


    return { products, categories };

}


export default useGetProducts;