import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {consultarBDD} from '../../assets/funciones.js'
import { cargarBDD } from '../../assets/firebase.js';

const ItemListContainer = () => {
    
    const [productos,setProductos] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        if(category) {
            consultarBDD('../json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === (category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
        })
    }   else{
            consultarBDD('./json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
        })
    }

    //cargarBDD().then(productos => console.log(productos))

 },[category]);
    
    return (
        <div>
            {productos}
        </div>
    );
}

export default ItemListContainer;
