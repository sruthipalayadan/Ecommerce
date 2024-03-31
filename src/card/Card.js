import styles from "./Card.module.css"



function Card(props) 
{
    var procard=props.card;
    console.log('procard:',procard);
   
    return ( 
     
        <div className={styles.pbox22}>
              <div className={styles.header22}><img src={procard.image} height={120}/></div>
            <div className={styles.nav22}>
                <h3>{procard.title}</h3>
               <br></br>
               <p>{ '₹'+procard.price}</p> 
               </div>   
            
        </div>
       
     );
}

export default Card;