import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
 
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
    <Link to="/">
    <img
         className="logo"
         src="https://play-lh.googleusercontent.com/5HByl4GnL3kfdVod2uYkY8Buxo0mrz7WrglYk_aLViAx_RR1CpmqHGKber50vJRH5w" alt=''
         />
      </Link>


  {/* search bar*/}
    <div className='search'>
          <input className='searchIP' type='text'></input>
          <FontAwesomeIcon icon={faMagnifyingGlass}  className='searchIcon'/>
          
   </div>
   
   {/* nav */}
     <div className='nav'>
   
     <Link to={!user && '/login'}>
     <div onClick={handleAuthenticaton}  className='option'>
        <span className='actionOne'>{user ? 'Sign Out' : 'Sign In'}</span>
        
     </div>
     </Link>

 
    <Link to='/orders'> 
     <div className='option'>
     <span className='actionTwo'>Your Orders</span>
     </div>
     </Link>
    
     <Link to='/cart'>
       <div className='option'>
       <span className='actionThree'>Cart</span>
       </div>      
     </Link>

     
     
     
     <div className="optionBasket">
       
       <span className="basketCount">
         {basket.length}
       </span>
     </div>
   
     
        
     </div>

      
    </div>

  )
}

export default Header



