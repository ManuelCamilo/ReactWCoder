import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//Components
import Navbar from './Navbar/navbar';
import ItemListContainer from './ItemListContainer/itemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='product/:id' element= {<ItemDetailContainer/>}/>
        <Route path='/category/:category' element= {<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
      </Routes>   
    </BrowserRouter>
    </>
  );
}

export default App;

