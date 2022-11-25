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
        <button className="nav-link botonesNavBar" aria-current="page" > Notebooks </button>
        </li>
        <li className="nav-item">
        <button className="nav-link botonesNavBar" aria-current="page" > Merch </button>
        </li>
      </ul>
    </div>
    );
}

export default Categorias;
