import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CartContextProvider } from "./context/CartContext";
import { RouterProvider } from 'react-router-dom';
import { router } from './router'

/*  INICIO FIREBASE */
import { initializeApp } from "firebase/app";  //1°) Importa método inicializeApp

// El método inializeApp recibe este objeto de configuración que contienen 
// las llaves privadas de mi proyecto
const firebaseConfig = {
  apiKey: "AIzaSyB66-JmFvFfDn73HpGOfSHdGvJRGlbg_h8",
  authDomain: "amoripunto-1cc99.firebaseapp.com",
  projectId: "amoripunto-1cc99",
  storageBucket: "amoripunto-1cc99.appspot.com",
  messagingSenderId: "462098546950",
  appId: "1:462098546950:web:f4b015f0b4d4a066251e87"
};

/* Initialize Firebase
Así estaba desde firebase: const app = initializeApp(firebaseConfig);
pero no vamos a inicializar la aplicación intanciando eso en un app, 
sino ejecutando directamente al método: initializeApp(firebaseConfig);*/
initializeApp(firebaseConfig);

/* FIN FIREBASE */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

