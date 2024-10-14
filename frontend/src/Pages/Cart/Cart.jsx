
import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const{cartItems,food_list,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='cart'>
        <div className="cart-items">
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br/>
            <hr/>
            {food_list.map((item,index)=>{
              if(cartItems[item._id]>0)
                {
                  return(
                    <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={url+"/images/"+item.image} alt="" />
                   <p>{item.name}</p>
                   <p>Rs {item.price}</p>
                   <p>{cartItems[item._id]}</p>
                   <p>Rs {item.price*cartItems[item._id]}</p>
                   <p  onClick = {()=>removeFromCart(item._id)} className='cross'>x</p>
                 </div>
                  <hr/>
                </div>
             )
          }
      })}
    </div>
    <div className="cart-buttom">
      <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            {/* <p>{0}</p> */}
            <p>Rs {getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            {/* <p>{2}</p> */}

            <p>Rs {getTotalCartAmount()===0?0:20}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <b>Total</b>
            {/* <p>{0}</p> */}
            <b>Rs {getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
          </div>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type='text' placeholder='promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
      
  </div>
  )
}

export default Cart
