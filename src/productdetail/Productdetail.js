import styles from './Productdetail.module.css'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';


function Productdetail()
{
    const params=useParams();
    const prodId=params.productId;
    const [pro,setPro]=useState({});
  function loadProductId()
  { 
    fetch("https://fakestoreapi.com/products/"+prodId).then((response)=>{
        response.json().then((data)=>{
           console.log('data in pro:',data);
          setPro(data);
        }).catch(error=>{
            console.log(error);
        });
    }).catch(error=>{
        console.log(error);
    })
  }
    
    useEffect(()=>{loadProductId();},[prodId]);

     console.log('pro:',pro);
     console.log('data-object',pro.rating);
    
     
    return(
        <div className={styles.box1}>
            <div className={styles.box2}>
                <div className={styles.header0}>
                <img src={pro.image} height={150}/>
                </div>
                <div className={styles.nav0}>
                <h3>{pro.title}</h3>
               <br></br>
                <strong style={{color: "green"}}>{ '₹'+pro.price}</strong><br></br>
                <p><h5>{pro.description}</h5></p>
               <br></br>
             <p><strong style={{color: "red"}}>Rating:{ pro?.rating?.rate}</strong></p>
                <br></br>
               <p><strong>{pro?.rating?.count}+bought in past months</strong></p> 
                 

                </div>               
            </div>
         
        </div>
        
        )
}
export default Productdetail;