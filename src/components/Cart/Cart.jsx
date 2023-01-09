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
            <>
                <h1>Productos</h1>
                <button className="btn btn-dark"><Link to={'/checkout'}> Finalizar Compra </Link> </button>
                <button className="btn btn-dark"><Link to={'/'}> Continuar Comprando </Link> </button>
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