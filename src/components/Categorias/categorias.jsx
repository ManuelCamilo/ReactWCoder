import './categorias.css';

const Categorias = () => {
    return (
        <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
        <button className="nav-link botonesNavBar" aria-current="page" > Juegos </button>
        </li>
        <li className="nav-item">
        <button className="nav-link botonesNavBar" aria-current="page" > Consolas </button>
        </li>
        <li className="nav-item">
        <button className="nav-link botonesNavBar" aria-current="page" > Software </button>
        </li>
        <li className="nav-item">
        <button className="nav-link botonesNavBar" aria-current="page" > Servicios </button>
        </li>
      </ul>
    </div>
    );
}

export default Categorias;
