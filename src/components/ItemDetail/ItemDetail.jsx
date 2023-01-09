import ItemCount from "../ItemCount/ItemCount";
import { useCarritoContext } from "../../context/CarritoContex";
const ItemDetail = ({item}) => {
    const {addItem} = useCarritoContext()
    
    const onAdd = (contador) => {
        addItem(item, contador)
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${item.img}`} alt="" className="card-img-top imagenProducto img-fluid" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Modelo: {item.modelo}</p>
                    <p className="card-text">Marca: {item.marca}</p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/>
                    <button className="btn btn-danger">Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
