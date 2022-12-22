import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Catalogo from "../views/Catalogo";
import Detalle from "../views/Detalle";

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
])