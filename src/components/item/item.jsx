//card
const Item = ({producto}) => {
    console.log(producto)
    return (
        <>
            <div className="card cardProducto">
                <span className="contenedorImg">
                    <img src={`../img/${producto.img}`} className="card-img-top imagenProducto img-fluid" alt="al parecer nada..." />
                </span>
                <div className="card-body text-center infoProducto position-relative">
                    <h5 className="card-title infoProducto__title">{producto.nombre}</h5>
                    <div className="position-absolute bottom-0 mb-2 start-50 translate-middle-x">
                        <p className="card-text infoProducto__precio">{producto.precio}</p>
                        <button className="btn btn-danger infoProducto__boton">ver producto</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Item;