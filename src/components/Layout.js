import React from 'react';
import NavBar from './NavBar';

function Layout ({ children }) {
    return (
        <div className='h-screen'>
            <NavBar/>
            <body className="text-white flex flex-col justify-center items-center text-3xl text-center" > {children} </body>
            <footer className=' text-sm font-bold text-white text-center pb-1 pt-4'> AMORIPUNTO ♥ </footer>
        </div>
    );
}

export default Layout;