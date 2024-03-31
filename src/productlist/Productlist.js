import Productcard from "../productcard/Productcard";
import styles from './Productlist.module.css'
import { useEffect, useState } from "react";
const Productlist=()=> {
  const [Products,setproductlist]= useState([]);
  /*const [Products,setProductList]= useState([]);
  function ProductFetch()
  {
   fetch('http://fakestoreapi.com/products').then
   ((response)=>
                
             { response.json().then
                ((data)=>{
                  console.log('data:',data);
                  setProductList(data);
                  console.log('data:',Products);
               })
             
             })
  }
  useEffect(()=>{ProductFetch();},[]);*/

  function searchlist(){
    console.log("searchdata");
    fetch("https://fakestoreapi.com/products").then((response)=>{
        response.json().then((data)=>{
           console.log('data',data);
          setproductlist(data);
        });
    })
    }
    useEffect(()=>{searchlist();},[]);
    console.log('data1:',Products);
    return (
      <>
      
      <div  className={styles.container}>
        {Products.map((p) => {
          return <Productcard pro={p} />;
        })}
      </div>
      </>
    );
  }
  
  export default Productlist;
  