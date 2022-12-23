import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Catalogo from "../views/Catalogo";
import Detalle from "../views/Detalle";
import Cart from "../views/Cart";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/Catalogo/:category',
        element: <Catalogo />
    },
    {
        path: '/Detalle/:id',
        element: <Detalle />
    },
    {
        path: "/cart",
        element: <Cart />,
    },
])