import './App.css';
import Navbar from './Navbar/navbar';
import ItemListContainer from './ItemListContainer/itemListContainer';
function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Hola, ESTO ES EL LLENADO MAGICO"}/>
    </>
  );
}

export default App;
