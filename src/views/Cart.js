import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoTrashBinSharp } from 'react-icons/io5'
import Item from "../components/Item";
import Layout from "../components/Layout";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";

const Cart = () => {
    const [updatingProducts, setUpdatingProducts] = useState(false);
    const navigate = useNavigate();

    const { productsAdded: items, clear, totalAmount } = useContext(CartContext);

    const getTotalByProduct = (quantity, price) => {
        return quantity * price;
    };

    const handleFinalizePurchase = () => {

    const total = items.map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
        )
        .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
        buyer: { name: "Ceci", phone: "1566887755", email: "ceci@gmail.com" },
        items,
        total,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
        .then(() => {
        setUpdatingProducts(true);
        })
        .catch((err) => console.error({ err }))
        .finally(() => {});
    };

    useEffect(() => {
    if (updatingProducts) {
        const db = getFirestore();

        items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
            stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
            .then(() => {
            clear();
            alert("Compra finalizada");
            navigate("/");
            })
            .catch((err) => console.error(err));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatingProducts]);

    return (
    <Layout>
        <div className="flex flex-col max-w-[50%]">
        {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
            <MdOutlineShoppingBag alt="Empty Bag" className="w-44 h-44" />
            <h1 className="text-2xl">No has agregado productos a tu bolsa</h1>
            <button
                onClick={() => navigate("/")}
                className="rounded-lg p-2 bg-gray-800 text-white mt-4"
            >
                Ir al Inicio
            </button>
            </div>
        ) : (
            <div>
            <div className="flex gap-4">
                {items.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                    <div className="relative">
                    <Item
                        product={product.item}
                        quantityAdded={quantityAdded}
                    />
                    <IoTrashBinSharp itemId={product.item.id} />
                    </div>
                );
                })}
            </div>
            <div className="flex justify-end mt-4">
                <div className="flex flex-col">
                    <span>Total a pagar: ${totalAmount}</span>
                    <button
                    onClick={handleFinalizePurchase}
                    className="rounded-lg p-2 bg-gray-800 text-white"
                    >
                    Finalizar Compra
                    </button>
                </div>
            </div>
            </div>
        )}
        </div>
    </Layout>
    );
};

export default Cart;