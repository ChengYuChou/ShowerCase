import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

function ShoppingCart({cartItems, addToCart, removeFromCart, removeAll}) {

  const [isCartOpen, setIsCartOpen] = useState(false)
        
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  

  
  

  return (
    <div>

        <IoCartOutline className='CartIcon'  onClick={toggleCart} style={{cursor: 'pointer'}}/>
    
        {isCartOpen && (
            <div className = {`cartSidebar  ${isCartOpen ? 'open': ''}`}>
            <p>購物車內容</p> 
            <button onClick={removeAll}>RemoveAll</button>        
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                        <button onClick={() => removeFromCart(item)}>-</button>
                        <button onClick={() => addToCart(item)}>+</button>
                    </li>
                ))}
            </ul>
            <p>------------------------------------------------</p>
            <div>
              <p>總共：${totalPrice.toFixed(2)}</p>
            </div>
            </div>
        )}

        

    </div>
  );
    
}

export default ShoppingCart