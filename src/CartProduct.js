import React from 'react'
import './CartProduct.css';
import { useStateValue } from './StateProvider';

function CartProduct({id,title,price,image,rating,isHidden}) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeFromCart = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


  return (
    <div className='cartProduct'>
        
         <img type="module" className='cart_img' src={image}></img>

         <div className='info'>
           <p className='title'>{title}</p>
           
           <p className='price'>
             <small>Rs</small>
             <strong>{price}</strong>
           </p>

           <div className='rating'>
           {Array(rating).fill().map((_,i)=>(
               <p>★</p>
           ))}
             
           </div>
            
           {!isHidden && (
             <button onClick={removeFromCart}>Remove From Cart</button>
             )}


         </div>
      
    </div>
  )
}

export default CartProduct
