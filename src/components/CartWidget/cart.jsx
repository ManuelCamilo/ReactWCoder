
const Cart = () => {
    return (
        <>
        <div className="text-center d-flex row container-fluid mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-x" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="6" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13" />
                <path d="M17 3l4 4" />
                <path d="M21 3l-4 4" />
            </svg>
            <p>En estos momentos el carrito esta en mantenimiento!, Disculpe las molestias.</p>
        </div>
        </>
    );
}

export default Cart;
