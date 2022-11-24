import React from 'react';
import NavBar from './NavBar';

function Layout ({ children }) {
    return (
        <div>
            <NavBar/>
            <body className="text-white flex flex-col justify-center items-center text-3xl lg:h-80 text-center" > {children} </body>
        </div>
    );
}

export default Layout;