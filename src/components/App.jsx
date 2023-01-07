import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//Context
import { CarritoProvider } from '../context/CarritoContex';

//Components
import Navbar from './Navbar/navbar';
import ItemListContainer from './ItemListContainer/itemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='product/:id' element= {<ItemDetailContainer/>}/>
          <Route path='/category/:category' element= {<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
      </CarritoProvider>   
    </BrowserRouter>
    </>
  );
}

export default App;

