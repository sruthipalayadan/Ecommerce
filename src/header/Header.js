import styles from './Header.module.css'
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link,NavLink } from 'react-router-dom';
function Header(props)
{
//const [Text,setText]=useState('');
/*const search=($e)=>
{
  
setText($e.target.value);
}
const onSearchChange=()=>{
  props.onSearchChange(Text);
}*/




    return(
          
      <nav className="navbar sticky-top navbar-dark navbar-expand-lg  bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={"https://media.licdn.com/dms/image/D560BAQHtyWPAm6reqA/company-logo_200_200/0/1688667558576/bonanza_logo?e=1719446400&v=beta&t=T7FR56yeWa0FJR25rUjwxdbt98Lx7hxeyXR768SVIbY"} height={50}></img>
           <strong style={{color: "green"}}><i>B~SHOPSY</i></strong> 
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link"><strong>HOME</strong></NavLink>
              {/* <a className="nav-link active" aria-current="page" href="/">HOME</a> */}
            </li>
            <li className="nav-item">
            <NavLink to="/about" className="nav-link"><strong>ABOUT Us</strong></NavLink>
              {/* <a className="nav-link" href="/about"><strong>ABOUT Us</strong></a> */}
            </li>
            <li className="nav-item">
            <NavLink to="/contact" className="nav-link"><strong>CONTACT Us</strong></NavLink>
              {/* <a className="nav-link" href="/contact"><strong>CONTACT Us</strong></a> */}
            </li>
            <li className="nav-item">
            <NavLink to="/productlist" className="nav-link"><strong>PRODUCTS</strong></NavLink>
              {/* <a className="nav-link" href="/productlist"><strong>PRODUCT</strong></a> */}
            </li>
            <li className="nav-item">
            <NavLink to="/cart" className="nav-link"><FaShoppingCart height={180}/><strong>CART</strong></NavLink>
              {/* <a className="nav-link" href="#"><FaShoppingCart height={180}/>CART</a>  */}
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
         
        
        )
}
export default Header;