import {useState} from 'react';

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        if(contador <10)
            setContador(contador+1);
    }
    const restar = () => {
        if(contador>1)
            setContador(contador-1);
    }
    const Agregar = () => {
        console.log(contador);
    }
    
    return (
        <div className='contador'>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
            {contador}
            <button className='btn btn-dark' onClick={() => restar ()}>-</button>
            <button className='btn btn-light' onClick={() => Agregar () }> Agregar al carrito </button>
        </div>
    );
}

export default ItemCount;
