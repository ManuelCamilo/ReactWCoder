import './cart.css';

const CartWidget = () => {
    return (
        <>
        <ul className='navbar-nav me-auto'>
            <li className='nav-link'> 
                <button className='cart'>Carrito</button>
                <p></p>
            </li>
        </ul>
        <p>0</p>
        </>
        );
}

export default CartWidget;
