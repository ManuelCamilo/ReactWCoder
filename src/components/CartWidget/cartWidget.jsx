import './cart.css';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContex';

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()

    return (
        <>
            <button className='cart nav-link' >
                <Link className='nav-link' to={"/cart"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width={40} height={40} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx={6} cy={19} r={2} />
                        <circle cx={17} cy={19} r={2} />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                    {getItemQuantity() > 0 && <span className='cantCarrito'>{getItemQuantity()}</span>}      
                </Link> 
            </button>
        </>
        );
}

export default CartWidget;
