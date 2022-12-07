import { useState, useEffect, } from "react";
import { consultarBDD } from "../../assets/funciones";
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    
    useEffect(() => {
        consultarBDD().then(productos => {
            const prod = productos.find(product => product.id === 1)
            console.log(prod)
        })
    
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default ItemDetailContainer;
