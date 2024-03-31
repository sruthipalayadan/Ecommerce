import styles from "./Offercard.module.css"



function Offercard(props) 
{
    var prod=props.offerproducts;
    return ( 
     
        <div className={styles.pbox1}>
            <div className={styles.header11}><img src={prod.image} height={120}/></div>
            <div className={styles.nav1}>
                <h3>{prod.title}</h3>
               <br></br>
                { '₹'+prod.price}
                <p style={{color: "red"}}>
                {'Rating: '+prod.rating.rate}
                </p>
                {prod.rating.count+"+bought in past months"}
            </div>
            
        </div>
       
     );
}

export default Offercard;