
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-w-coderhouse.firebaseapp.com",
  projectId: "react-w-coderhouse",
  storageBucket: "react-w-coderhouse.appspot.com",
  messagingSenderId: "832356973227",
  appId: "1:832356973227:web:00874223672339f356d5ee"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db,"productos"), { //collection si existe consulta si no existe crea
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export {cargarBDD}