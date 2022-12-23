import React from "react";
import Layout from '../components/Layout';
import ItemListContainer from '../components/ItemListContainer';
import { Link} from "react-router-dom";
import useGetProducts from "../hooks/useGetProduct";

function Catalogo () {
    const { products, categories } = useGetProducts();

    return (
        <Layout>
            <div className="w-4/5">
                <h2 className="text-white" > Nuestros productos </h2>
                <div className="flex justify-between items-center flex-wrap">
                    <h5 className="text-white text-lg p-4" > Filtrar por categoría: </h5>
                    <ul className="flex">
                        { categories.map( (cat, i) => <li key={i} className="p-4 text-lg"><Link to={`/Catalogo/${cat}`}>{cat}</Link></li> )} 
                        <li className="p-4 text-lg"><Link to="/Catalogo/all">Todas</Link></li>
                    </ul>
                </div>
                {products.length === 0 ? <p> Loading... </p> :
                <ItemListContainer /> }
            </div>
        </Layout>
    );
};


export default Catalogo;