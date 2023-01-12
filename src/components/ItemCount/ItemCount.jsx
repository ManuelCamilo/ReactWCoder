import {useState} from 'react';

const ItemCount = ({inicial,stock, onAdd}) => {
    const [contador, setContador] = useState(inicial);

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    const agregarAlCarrito = () => onAdd(contador)
    
    return (
        <div className='contador'>
            <button className='btn btn-dark' onClick={() => restar ()}><i class="fa-solid fa-minus"></i></button>
            {contador}
            <button className='btn btn-dark' onClick={() => sumar()}><i class="fa-solid fa-plus"></i></button>
            <button className='btn btn-light' onClick={agregarAlCarrito}> <i class="fa-solid fa-cart-plus"> </i>  </button>
        </div>
    );
}

export default ItemCount;
