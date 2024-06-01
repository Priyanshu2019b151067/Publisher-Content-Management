import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
function CartPage() {
  const state = useSelector((state) => state);
  const user = state.user;
  const token = state.token;
  console.log(user);
  console.log(token);
  const renderedCart = user.cart.map((item)=>{
    
  })
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-8'>
                {renderedCart}
            </div>
        </div>
    </div>
  )
}

export default CartPage