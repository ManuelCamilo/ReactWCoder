import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProductos } from '../../assets/firebase.js';

//importar getProducto y updateProducto desde firebase y descomentar funcion para poder actualizar stocks manualmente de dichos productos.
//importar cargarBDD si agrega productos y funcion 
//importar deleteProducto si elimina producto
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
    
    
    /*getProducto("BgD5mm2eZniA3tRmreIa").then(prod => {
        prod.stock += 10
        delete prod.id
        updateProducto("BgD5mm2eZniA3tRmreIa", prod).then(estado => console.log(estado))
    }) */

    //deleteProducto("aqXOnlLOXyGHeZfazC0W").then(estado => console.log(estado))

    // cargarBDD()
 },[category]);
    
    return (
        <div className="d-flex row contenido">
            <div className="bg-productos">
                {productos}
            </div>
        </div>
    );
}

export default ItemListContainer;
