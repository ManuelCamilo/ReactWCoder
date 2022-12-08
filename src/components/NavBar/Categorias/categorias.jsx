import './categorias.css';
import { Link } from 'react-router-dom';
const Categorias = () => {
    return (
      <div className="navbar-nav">
        <button className="nav-item nav-link botonesNavBar" aria-current="page" > <Link className='nav-link' to={"/"}> Home </Link> </button>
        <button className="nav-item nav-link botonesNavBar" aria-current="page" > <Link className='nav-link' to={"/category/games"}> Games</Link>  </button>
        <button className="nav-item nav-link botonesNavBar" aria-current="page" > <Link className='nav-link' to={"/category/consolas"}> Game Console </Link> </button>
        <button className="nav-item nav-link botonesNavBar" aria-current="page" > <Link className='nav-link' to={"/category/notebooks"}> Notebooks</Link>  </button>
        <button className="nav-item nav-link botonesNavBar" aria-current="page" > <Link className='nav-link' to={"/category/merch"}> Merch</Link>  </button>
      </div>
    );
}

export default Categorias;
