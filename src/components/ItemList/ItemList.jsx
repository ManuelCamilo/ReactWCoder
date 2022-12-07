import Item from "../item/item";
const ItemList = ({productList}) => {
    return (
        <div className="contenedorCard row container">
            {productList.map(product => <Item key={product.id} producto={product}/>)}
        </div>
    );
}

export default ItemList;
