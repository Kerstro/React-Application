import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
  selectCartTotal,
  selectCartCount
} from './features/cart/CartSlice';

function CartItem({ onContinueShopping, onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);

  const handleCheckout = () => {
    alert('🌿 Coming Soon! Thank you for shopping with Paradise Nursery!');
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <a href="#" className="navbar-brand" onClick={() => onNavigate('landing')}>Paradise Nursery</a>
        <ul className="navbar-links">
          <li><a href="#" onClick={() => onNavigate('products')}>Home</a></li>
          <li><a href="#" onClick={() => onNavigate('products')}>Plants</a></li>
          <li>
            <div className="cart-icon">
              🛒 <span className="cart-count">{cartCount}</span>
            </div>
          </li>
        </ul>
      </nav>

      <div className="cart-container" style={{ padding: '30px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Shopping Cart</h2>
        <h3 style={{ textAlign: 'center', color: '#2e7d32' }}>Total Amount: ${cartTotal}</h3>
        
        <div className="cart-items-list" style={{ marginTop: '30px' }}>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item-card" style={{ display: 'flex', alignItems: 'center', background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
              <div style={{ marginLeft: '20px', flex: 1 }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{item.name}</h4>
                <p style={{ color: '#666' }}>Unit Price: ${item.price}</p>
                <p style={{ fontWeight: 'bold', color: '#2e7d32', marginTop: '5px' }}>Subtotal: ${item.price * item.quantity}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button onClick={() => dispatch(decreaseQuantity(item.id))} style={{ padding: '5px 12px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer' }}>-</button>
                <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))} style={{ padding: '5px 12px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer' }}>+</button>
                <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: '20px', background: '#e53935', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button className="get-started-btn" onClick={onContinueShopping}>Continue Shopping</button>
          <button className="get-started-btn" style={{ background: '#2e7d32' }} onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;