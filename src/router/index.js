import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Catalogo from "../views/Catalogo";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/Catalogo/:category',
        element: <Catalogo />
    },
  /*  {
        path: '/ItemView/:id',
        element: <CategoryView />
    },*/
])