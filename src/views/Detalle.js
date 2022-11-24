import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { useParams } from "react-router-dom";
import { item } from "../mocks/item.mock";


function Catalogo () {
    const [selected, setSelected] =  useState({});
    const { id } = useParams();

    useEffect(() => {
        new Promise( resolve => resolve(item) )
        .then( data => setSelected(item.find( data => data.id === id)));
    }, [id]);

    return (
        <Layout>
        <h1 className="text-white" > {selected.className} </h1>
            <ItemDetailContainer product = { selected } /> 
        </Layout>
    );
};


export default Catalogo;