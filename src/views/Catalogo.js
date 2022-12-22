import React from "react";
import Layout from '../components/Layout';
import ItemListContainer from '../components/ItemListContainer';
import { Link} from "react-router-dom";
import useGetProducts from "../hooks/useGetProduct";

function Catalogo () {
    const { products, categories } = useGetProducts();

        //PARA CONSULTAR TODOS LOS PRODUCTOS CON FILTRO
        /*  const itemCollection = collection(db, "items");
        const q = query(itemCollection, where("category", "==", "carteras"));
        getDocs(q).then( response => {
            const products = response.docs.map( doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setProducts(products);
        })*/

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
                <ItemListContainer products = { products } /> }
                    {/* { categories.map( (product) => <Item product = {product} /> )} */}
            </div>
        </Layout>
    );
};


export default Catalogo;