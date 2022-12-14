import './navbar.css';
import CartWidget from '../CartWidget/cartWidget';
import Categorias from './Categorias/categorias.jsx';
import LogoSvg from '../LogoSvg/logoSvg.jsx';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <div className="container">
                <LogoSvg/>
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
