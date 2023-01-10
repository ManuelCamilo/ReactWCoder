import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContex";

const Cart = () => {
    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext()
    // clase 11 - tecnicas de rendering - Van 1 Hora 14 minutos.
    return (
        <>
            {carrito.length === 0 ?
            <>
                <h1> Carrito Vacio </h1>
                <button className="btn btn-dark"><Link to={'/'}> Continuar Comprando </Link> </button>
            </>
            :
            <div className="container cartContainer">
                {
                    carrito.map((prod) =>
                        <div className="card mb-3" key={prod.id} style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={prod.img} alt="producto" className="img-fluid rounded-start" />
                                </div>
                            </div>
                            <div className="col-md-8"></div>
                                <div className="cardBody">
                                    <h5 className="card-title"> {`${prod.nombre} ${prod.marca}`}</h5>
                                    <p className="card-text">Cantidad: {prod.cant}</p>
                                    <p className="card-text">Precio unitario: {new Intl.NumberFormat ('de-De').format(prod.precio)} </p>
                                    <p className="card-text">Precio total: {new Intl.NumberFormat ('de-De').format(prod.precio * prod.cant)}</p>
                                </div>
                                <button className="btn btn-danger" onClick= {() => removeItem(prod.id)}>Eliminar producto</button>
                        </div>   
                )}


                <p>Precio total: ${ new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
                <div>    
                    <button className="btn btn-dark"><Link to={'/checkout'}> Finalizar Compra </Link> </button>
                    <button className="btn btn-dark"><Link to={'/'}> Continuar Comprando </Link> </button>
                </div>
            </div>
            }
        </>
    );
}

export default Cart;


<div>
            <div className="text-center d-flex row container-fluid mt-5">
            
            <button className="btn btn-dark"><Link to={'/checkout'}> Finalizar Compra </Link> </button>
        </div>
        </div>