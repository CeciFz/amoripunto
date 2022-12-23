import React from "react";
import Layout from '../components/Layout';
import ItemDetailContainer from '../components/ItemDetailContainer';

import useGetProducts from "../hooks/useGetProduct";


function Detalle () {
    const { products } = useGetProducts();

    const renderItemDetail = () => {
        return (
            <Layout>
                <ItemDetailContainer product = { products[0] } /> 
            </Layout>
        )
    };

    return products[0] && renderItemDetail();
};


export default Detalle;