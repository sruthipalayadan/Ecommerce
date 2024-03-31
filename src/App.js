import logo from './logo.svg';
import './App.css';
import  Header from './header/Header'
import Nav from './nav/Nav'
import Body from './body/Body'
import Footer from './footer/Footer'
import Productlist from './productlist/Productlist';
import { useState } from 'react';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact'; 
import {Routes,Route} from 'react-router-dom';
import Notfound from './notfound/Notfound';
import Productdetail from './productdetail/Productdetail';
import Cart from './cart/Cart';
import ProductContext from './contexts/ProductContext';

function App() {
  /*const[ searchText,setSearchText]=useState('');
  function onSearchChange(text)
  {
    setSearchText(text);
    console.log(text);
  }
*/
const [cartitem,setCartItem]=useState([]);

function storeItem(cartproduct)
{
  cartitem.push(cartproduct);
  console.log('cartproduct:',cartitem);
}
 console.log('cartitem:',cartitem);

  return (
    <div className="App">
      <div  className='container' >
        <ProductContext.Provider 
          value={{
          cartpro:cartitem,
          saveItem:storeItem
                }}>
        <Header  />
        <Routes>

       <Route path='/' element={ <Home/>} />
       <Route path='/about' element={ <About/>} />
       <Route path='/contact' element={ <Contact/>} />
       <Route path='/productlist' element={ <Productlist />} />
       <Route path='*' element={<Notfound/>}/>
       <Route path='/productlist/:productId' element={<Productdetail/>} />
       <Route path='/cart' element={<Cart/>}/>
      </Routes>
    
      <Footer/>
      </ProductContext.Provider>
      </div>


      
     
    </div>
  );
}

export default App;
