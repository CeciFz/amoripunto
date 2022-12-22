import React, { useEffect } from "react";
import Layout from '../components/Layout';
import ItemDetailContainer from '../components/ItemDetailContainer';
//import { useParams } from "react-router-dom";
//import { item } from "../mocks/item.mock";
import useGetProducts from "../hooks/useGetProduct";


function Detalle () {
    //const [selected, setSelected] =  useState({});
    //const { id } = useParams();
    const selected = useGetProducts();


    /*useEffect(() => {
        new Promise( resolve => resolve(item) )
        .then( data => setSelected(item.find( data => data.id === id)));
    }, [id]);*/

    useEffect(() => {
        console.log(selected)
    }, [selected]);

    return (
        <Layout>
        <h1 className="text-white" > {selected[0].name} </h1>
            <ItemDetailContainer product = { selected[0] } /> 
        </Layout>
    );
};


export default Detalle;