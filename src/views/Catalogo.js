import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import ItemListContainer from '../components/ItemListContainer';
import { useParams } from "react-router-dom";
import { item } from "../mocks/item.mock";
import { Link } from "react-router-dom";

// import { doc, getDoc, getFirestore } from "firebase/firestore"; //PARA CONSULTAR UN SOLO PRODUCTO
//import { collection, getDocs, getFirestore } from "firebase/firestore"; //PARA CONSULTAR TODOS LOS PRODUCTOS
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore"; //PARA CONSULTAR TODOS LOS PRODUCTOS CON FILTRO

function Catalogo () {
    const [products, setProducts] =  useState([]);
    const { category } = useParams();

    useEffect(() => { 
        const db = getFirestore();

        //PARA CONSULTAR UN SOLO PRODUCTO  
        /*  const itemRef = doc(db, "items", "8ToMqxAVAopOTHZJbIcF");
        getDoc(itemRef).then((response) => {
            if(response.exists()){
                console.log(response.data())
                setProducts([{ id: "8ToMqxAVAopOTHZJbIcF", ...response.data() }]);
            }
        })*/

        //PARA CONSULTAR TODOS LOS PRODUCTOS SIN FILTROS
        /*const itemCollection = collection(db, "items");
        getDocs(itemCollection).then( response => {
            const products = response.docs.map( doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setProducts(products);
        })*/

        //PARA CONSULTAR TODOS LOS PRODUCTOS CON FILTRO
        const itemCollection = collection(db, "items");
        const q = query(itemCollection, where("category", "==", "carteras"));
        getDocs(q).then( response => {
            const products = response.docs.map( doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setProducts(products);
        })


    }, []);


/*
    useEffect(() => {
        new Promise((resolve) =>
            setTimeout( () => {
                resolve(item);
            }, 1000)
        ).then( (data) => setProducts(data));
    }, []);
*/

    return (
        <Layout>
        <h1 className="text-white" > Nuestros productos </h1>
        <div className="flex justify-between items-center flex-wrap">
            <h5 className="text-white text-lg p-4" > Filtrar por categoría: </h5>
            <ul className="flex">
                <li className="p-4 text-lg"><Link to="/Catalogo/carteras">Carteras</Link></li>
                <li className="p-4 text-lg"><Link to="/Catalogo/mochilas">Mochilas</Link></li>
                <li className="p-4 text-lg"><Link to="/Catalogo/cintos">Cintos</Link></li>
                <li className="p-4 text-lg"><Link to="/Catalogo/all">Todas</Link></li>
            </ul>
        </div>
        {products.length === 0 ? <p> Loading... </p> :
        <ItemListContainer products = { category !== 'all' ? item.filter( products => products.category === category): products } /> }
            {/* { categories.map( (product) => <Item product = {product} /> )} */}
        </Layout>
    );
};


export default Catalogo;