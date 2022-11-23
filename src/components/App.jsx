import './App.css';
import Navbar from './Navbar/navbar';
import ItemListContainer from './ItemListContainer/itemListContainer';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Aquí ira el contenido de mi página"}/>
    </>
  );
}

export default App;
