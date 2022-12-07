import Item from "../item/item";
const ItemList = ({productList}) => {
    return (
        <div className="contenedorCard row container-lg">
            {productList.map(product => <Item key={product.id} producto={product}/>)}
        </div>
    );
}

export default ItemList;
