import React from 'react';
import NavBar from './NavBar';

function Layout ({ children }) {
    return (
        <div className='h-screen flex flex-col'>
            <NavBar />
            <section className="grow text-white flex flex-col justify-center items-center text-3xl text-center" > {children} </section>
            <footer><h1 className='tracking-widest text-sm font-bold text-white text-center pb-2 pt-2'> AMORIPUNTO ♥ </h1></footer>
        </div>
    );
}

export default Layout;