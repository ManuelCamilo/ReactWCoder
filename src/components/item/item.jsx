import { Link } from "react-router-dom";
//card
const Item = ({prod}) => {
    return (
        <>
            <div className="card col-lg-3 col-md-4 col-sm-6 cardProducto ">
                <span className="contenedorImg">
                    <img src={`../img/${prod.img}`} className="card-img-top imagenProducto" alt="al parecer nada..." />
                </span>
                <div className="card-body text-center infoProducto position-relative">
                    <h5 className="card-title infoProducto__title">{prod.nombre}</h5>
                    <div className="position-absolute bottom-0 mb-2 start-50 translate-middle-x">
                        <p className="card-text infoProducto__precio">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                        <button className="btn btn-danger infoProducto__boton"><Link className="nav-link" to={`/product/${prod.id}`}> Ver Producto </Link> </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Item;
