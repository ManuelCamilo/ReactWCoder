import './categorias.css';

const Categorias = () => {
    return (
      <div className="navbar-nav">
        <button className="nav-item nav-link botonesNavBar" aria-current="page" > Juegos </button>
        <button className="nav-item nav-link botonesNavBar" aria-current="page" > Consolas </button>
        <button className="nav-item nav-link botonesNavBar" aria-current="page" > Notebooks </button>
        <button className="nav-item nav-link botonesNavBar" aria-current="page" > Merch </button>
      </div>
    );
}

export default Categorias;
