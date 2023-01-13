import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContex";

const Cart = () => {
    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext()
    // clase 11 - tecnicas de rendering - Van 1 Hora 14 minutos.
    return (
        <>
            {carrito.length === 0 ?
            <>
                <h1 className="carritoTitulo"> Carrito Vacio </h1>
                <button className="btn btn-danger botonAgregar"><Link to={'/'} className="nav-link"> Agregar productos! </Link> </button>
            </>
            :
            <>
                <h1 className="carritoTitulo">Tus productos seleccionados!</h1>
                <div className="container cartContainer">
                    {
                        carrito.map((prod) =>
                        <div className="card mb-3 cartEstilos" key={prod.id}>
                            <div className="col-md-4 contenedorImg">
                                <img src={prod.img} alt="producto" className="img-fluid rounded-start imgCart" />
                            </div>
                            <div className="cardBody col-md-4">
                                <h1 className="card-title"> {`${prod.nombre} ${prod.marca}`}</h1>
                                <p className="card-text">Cantidad: {prod.cant}</p>
                                <p className="card-text">Precio unitario: $ {new Intl.NumberFormat ('de-De').format(prod.precio)} </p>
                                <p className="card-text">Precio total: $ {new Intl.NumberFormat ('de-De').format(prod.precio * prod.cant)}</p>
                            </div>
                            <button className="btn btn-danger" onClick= {() => removeItem(prod.id)}><i class="fa-solid fa-trash-can"></i></button>
                        </div>    
                    )}


                    <p className="totalPrice">Precio total: $ { new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                    <div>    
                        <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
                        <button className="btn btn-dark"><Link to={'/checkout'} className="nav-link"> Finalizar Compra </Link> </button>
                        <button className="btn btn-dark"><Link to={'/'} className="nav-link"> Continuar Comprando </Link> </button>
                    </div>
                </div>
            </>
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