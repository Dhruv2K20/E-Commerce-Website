import React from 'react'
import './Cart.css'
import Subtotal from './Subtotal'
import CartProduct from './CartProduct';
import { useStateValue } from './StateProvider'
// import { useState }  from 'react';

function Cart() {
  
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='cart'>
        
    <div className='left'>
         
       <div>
       <h3>Hello,{!user ? 'Guest' : user.email}</h3>
        <h2 className='title'> Shopping Cart  </h2>
        
          {basket.map(item=>(
             <CartProduct 
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating = {item.rating}
             />
          ))}
        {/*CartProduct*/}

       </div>

    </div>


    <div className='right'>
        
     </div>
        
        <Subtotal/>

    </div>
  )
}

export default Cart
