import { useContext } from 'react';
import styles from './Cart.module.css'
import ProductContext from '../contexts/ProductContext';
import Card from '../card/Card';

function Cart()
{
  const itempro=useContext(ProductContext);
  const cart=itempro.cartpro; 
  console.log('itempro:',cart);
  
    return( 
         <div>
          <div  className={styles.containercard}>
            {
             cart.length===0?
             (<h1 className={styles.headbox}>Cart is empty.<br></br>Please add item to cart</h1>
              )
             :( 
             cart.map((p)=>{
                 return<Card card={p} />;})
              )
             }
            {/* {cart.map((p) => {
            return <Card card={p} />;
             })} 
             {cart.length === 0 && <h1 className={styles.headbox}>Cart is empty.<br></br>Please add item to cart</h1>}
            */}
            </div>   
         </div>
          
        
        )
}
export default Cart;