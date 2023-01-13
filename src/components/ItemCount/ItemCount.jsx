import {useState} from 'react';

const ItemCount = ({inicial,stock, onAdd}) => {
    const [contador, setContador] = useState(inicial);

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    const agregarAlCarrito = () => onAdd(contador)
    
    return (
        <div className='contador d-flex justify-content-around align-items-center'>
            <button className='btn btn-dark masmenos' onClick={() => restar ()}><i class="fa-solid fa-minus"></i></button>
            <p className='cantidadActual'> {contador} </p>
            <button className='btn btn-dark masmenos' onClick={() => sumar()}><i class="fa-solid fa-plus"></i></button>
            <button className='btn btn-light masmenos' onClick={agregarAlCarrito}> <i class="fa-solid fa-cart-plus"> </i>  </button>
        </div>
    );
}

export default ItemCount;
