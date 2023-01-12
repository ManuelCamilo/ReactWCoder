import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//Context
import { CarritoProvider } from '../context/CarritoContex';

//Toastify
import { ToastContainer} from 'react-toastify'; 

//Components
import Navbar from './Navbar/navbar';
import Carrusel from './Carrusel/carrusel';
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
        <Carrusel/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='product/:id' element= {<ItemDetailContainer/>}/>
          <Route path='/category/:category' element= {<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
        <ToastContainer/>
      </CarritoProvider>   
    </BrowserRouter>
    </>
  );
}

export default App;

