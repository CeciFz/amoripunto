import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { getDownloadURL, getStorage, ref } from "firebase/storage";

function App() {
  const [ portada, setPortada ] = useState(null);

  const storage = getStorage();
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
