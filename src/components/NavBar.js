import React, { useState } from "react";
import CartWidget from "./CartWidget";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function NavBar(){
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4 text-white">
            <h1 className="text-3xl font-bold text-[#00df9a]"><a href="../index.js">Amoripunto.</a></h1>
            <ul className="md:flex hidden">
                <li className="p-4"><a href="../index.js">Inicio</a></li>
                <li className="p-4"><a href="../index.js">Productos</a></li>
                <li className="p-4"><a href="../index.js">Sale</a></li>
                <li className="p-4"><a href="../index.js">Conocenos</a></li>
                <li className="p-4"><a href="../index.js"><CartWidget/></a></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                { !nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/> }
            </div>
            <div className={ !nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="text-3xl font-bold text-[#00df9a] m-8">Amoripunto.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Inicio</li>
                    <li className="p-4 border-b border-gray-600">Productos</li>
                    <li className="p-4 border-b border-gray-600">Sale</li>
                    <li className="p-4 border-b border-gray-600">Acerca de</li>
                    <li className="p-4 border-b border-gray-600">Contacto</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;