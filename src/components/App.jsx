import './App.css';
import Navbar from './Navbar/navbar';
import ItemListContainer from './ItemListContainer/itemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={""}/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
