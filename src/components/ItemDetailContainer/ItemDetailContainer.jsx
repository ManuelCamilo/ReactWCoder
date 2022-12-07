import { useState, useEffect, } from "react";
import {consultarBDD} from '../../assets/funciones.js'
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    
    useEffect(() => {
        consultarBDD().then(productos => {
            const prod = productos.find(product => product.id === 1)
            setProducto (prod)
        })
    
    }, []);

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
