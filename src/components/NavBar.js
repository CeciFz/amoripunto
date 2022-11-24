import React, { useState } from "react";
import CartWidget from "./CartWidget";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";


function NavBar(){
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <header>
            <nav className="flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4 text-white">
                <h1 className="text-3xl font-bold text-[#00df9a]"><Link to="/">Amoripunto.</Link></h1>
                <ul className="md:flex hidden">
                    <li className="p-4"><Link to="/">Inicio</Link></li>
                    <li className="p-4"><Link to="/Catalogo/all">Productos</Link></li>
                    {/* <li className="p-4"><Link to="../index.js">Sale</Link></li>
                    <li className="p-4"><Link to="../index.js">Conocenos</Link></li> */}
                    <li className="p-4"><Link to="/"><CartWidget/></Link></li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    { !nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/> }
                </div>
                <div className={ !nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden" : "fixed left-[-100%]"}>
                    <h1 className="text-3xl font-bold text-[#00df9a] m-8"><Link to="/">Amoripunto.</Link></h1>
                    <ul className="uppercase p-4">
                        <li className="p-4"><Link to="/">Inicio</Link></li>
                        <li className="p-4"><Link to="/Catalogo/all">Productos</Link></li>
                        {/* <li className="p-4"><Link to="../index.js">Sale</Link></li>
                        <li className="p-4"><Link to="../index.js">Conocenos</Link></li> */}
                        <li className="p-4"><Link to="/"><CartWidget/></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;