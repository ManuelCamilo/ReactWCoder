import './App.css';
import Navbar from './Navbar/navbar';
import ItemListContainer from './ItemListContainer/itemListContainer';
import ItemCount from './ItemCount/ItemCount';
function App() {
  return (
    <>
    <Navbar/>
    <ItemCount stock={10}/>
    <ItemListContainer greeting={"Hola, ESTO ES EL LLENADO MAGICO"}/>
    </>
  );
}

export default App;
