import { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import {consultarBDD} from '../../assets/funciones.js'
const ItemListContainer = ({greeting}) => {
    const [productos,setProductos] = useState([]);
    useEffect(() => {
        consultarBDD().then(productList=> {
            const cardProductos = ItemList({productList})
            setProductos(cardProductos)
        })
    }, []);
    console.log(productos)


    
    return (
        <div className="cardProductos d-flex flex-row ">
            {productos}
        </div>
    );
}

export default ItemListContainer;
