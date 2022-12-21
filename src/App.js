import React, { useState, useEffect } from 'react';
//import Bandolera_roja from "./assets/images/Bandolera_roja.jpg";
import Layout from './components/Layout';
import { getDownloadURL, getStorage, ref } from "firebase/storage";

function App() {
  const [ portada, setPortada ] = useState(null);

  const storage = getStorage();
 // const imagesRef  = ref(storage, 'images');
  const portadaRef = ref(storage , 'images/1_Portada.jpg');

  useEffect(() => {
    getDownloadURL(portadaRef)
    .then( img => setPortada(img) )
    .catch( error => console.error(error) )
  }, [portadaRef]);

  return (
    <Layout>
        <img src={ portada } alt="Portada" />
    </Layout>
    );
}

export default App;
