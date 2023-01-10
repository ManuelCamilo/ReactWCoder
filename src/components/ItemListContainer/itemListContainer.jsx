import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProducto, updateProducto} from '../../assets/firebase.js';
//importa cargarBDD si agrega productos 
//importa deleteProducto si elimina producto
const ItemListContainer = () => {
    
    const [productos,setProductos] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        if(category) {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === (category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
        })
    }   else{
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
        })
    }
    
    /*
    getProducto("6idcd5gsApOrkEfYNAtv").then(prod => {
        prod.stock -= 3
        delete prod.id
        updateProducto("6idcd5gsApOrkEfYNAtv", prod).then(estado => console.log(estado))
    }) */

    //deleteProducto("aqXOnlLOXyGHeZfazC0W").then(estado => console.log(estado))

    //cargarBDD()
 },[category]);
    
    return (
        <div>
            {productos}
        </div>
    );
}

export default ItemListContainer;
