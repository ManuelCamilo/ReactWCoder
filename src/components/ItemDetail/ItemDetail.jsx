const ItemDetail = ({item}) => {
    console.log(item)
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${item.img}`} alt="" className="card-img-top imagenProducto img-fluid" />
            </div>
            <div className="col-md-8">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">Modelo: {item.modelo}</p>
                <p className="card-text">Marca: {item.marca}</p>
                <p className="card-text">Precio: {item.precio}</p>
                <p className="card-text">Stock: {item.stock}</p>
                
                <button className="btn btn-danger">Finalizar Compra</button>
            </div>
        </div>
    );
}

export default ItemDetail;
