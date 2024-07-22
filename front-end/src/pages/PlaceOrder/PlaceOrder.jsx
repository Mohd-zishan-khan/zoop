import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
            <p className="title">Delivery information</p>
            <div className="multi-fields">
              <input type="text" placeholder='First name' />
              <input type="text" placeholder='Last name' />

            </div>
            <input type="email" placeholder='Email address' />
            <input type="text" placeholder='Street' />
            <div className="multi-fields">
              <input type="text" placeholder='city' />
              <input type="text" placeholder='State' />

            </div>
            <div className="multi-fields">
              <input type="text" placeholder='zip code' />
              <input type="text" placeholder='country' />

            </div>
            <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>subtotal</p>
              <p> ₹ {getTotalCartAmount()*5}</p>

            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery fee</p>
              <p> ₹ { getTotalCartAmount()===0?0: 30}</p>

            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b> ₹ {getTotalCartAmount()===0?0:(getTotalCartAmount()*5)+30}</b>

            </div>

          </div>
          <button  >PROCEED TO PAYMENT</button>

        </div>
          
      </div>


    </form>
  )
}

export default PlaceOrder