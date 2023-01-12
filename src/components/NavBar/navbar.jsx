import './navbar.css';
import CartWidget from '../CartWidget/cartWidget';
import Categorias from './Categorias/categorias.jsx';
import Logo from '../Logo/logo';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navegacion">
            <div className="container">
                <Logo/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse">
                <Categorias/>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default Navbar;
