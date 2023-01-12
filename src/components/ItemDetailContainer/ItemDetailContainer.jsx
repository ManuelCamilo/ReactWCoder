import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../assets/firebase.js";

import ItemDetail from "../ItemDetail/ItemDetail.jsx";
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        getProducto(id).then (prod => setProducto (prod))
    },[id]);

    return (
        <div className="card mt-5 container-md">
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
