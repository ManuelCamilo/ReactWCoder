import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/navbar';
import ItemListContainer from './ItemListContainer/itemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './CartWidget/cart';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='product/:id' element= {<ItemDetailContainer/>}/>
        <Route path='/category/:category' element= {<ItemListContainer/>}/>
        <Route path='/carrito' element={<Cart/>}/>
      </Routes>   
    </BrowserRouter>
    </>
  );
}

export default App;

