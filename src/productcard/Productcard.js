import styles from "./Productcard.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from '../contexts/ProductContext';


function Productcard(props) 
{
    var prod=props.pro;
    console.log('procard:',prod);
    const {saveItem}=useContext(ProductContext);
    return ( 
     
        <div className={styles.pbox}>
              <div className={styles.header1}><img src={prod.image} height={120}/></div>
            <div className={styles.nav}>
               <Link to={"/productlist/"+prod.id}> <h3>{prod.title}</h3></Link>
               <br></br>
               <p>{ '₹'+prod.price}</p> 
                <p style={{color: "red"}}>
                {'Rating: '+prod.rating.rate}
                </p>
                <p>{prod.rating.count+"+bought in past months"}</p>
               </div>
                <p>
                    <button  className="btn btn-danger" onClick={()=>{
                        console.log('prodcontext:',prod);
                        saveItem(prod);
                     } } >Add to Cart</button>
                 </p>


           
            
        </div>
       
     );
}

export default Productcard;