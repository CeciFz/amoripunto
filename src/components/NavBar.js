import React, { useState, useEffect } from 'react';
import CartWidget from "./CartWidget";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { getDownloadURL, getStorage, ref } from "firebase/storage";


function NavBar(){
    const [nav, setNav] = useState(true);
    const [ logo, setLogo ] = useState(null);

    const storage = getStorage();
    const logoRef = ref(storage , 'images/2_LogoAP_Inicio.jpeg');

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        getDownloadURL(logoRef)
        .then( img => setLogo(img) )
        .catch( error => console.error(error) )
      }, [logoRef]);

    return (
        <header className="md:fixed top-0 left-0 right-0">
            <nav className="flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4 text-white">
                <Link to="/" className='max-sm:w-32 w-36'><img className='rounded-lg w-full' src={ logo } alt="Logo Amoripunto"/></Link>
                {/* <h1 className="text-3xl font-bold text-[#00df9a]"><Link to="/">Amoripunto.</Link></h1> */}
                <ul className="md:flex hidden">
                    <li className="p-4"><Link className='tracking-widest text-lg' to="/">Inicio</Link></li>
                    <li className="p-4"><Link className='tracking-widest text-lg' to="/Catalogo/all">Productos</Link></li>
                    {/* <li className="p-4"><Link to="../index.js">Sale</Link></li>
                    <li className="p-4"><Link to="../index.js">Conocenos</Link></li> */}
                    <li className="p-4"><Link  to="/"><CartWidget/></Link></li>
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