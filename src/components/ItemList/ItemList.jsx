import Item from "../item/item";
const ItemList = ({productsList}) => {
    return (
        <div className="contenedorCard row container-lg">
            {productsList.map(producto => <Item key={producto.id} prod = {producto}/>)}
        </div>
    );
}

export default ItemList;
