import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
  selectCartTotal,
} from './features/cart/CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleCheckout = () => {
    alert('🌿 Coming Soon! Checkout feature is under development. Thank you for shopping with Paradise Nursery!');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h2>Your cart is empty 🌱</h2>
          <p>Looks like you haven't added any plants yet.</p>
          <button className="continue-btn" style={{ marginTop: '20px' }} onClick={onContinueShopping}>
            Browse Plants
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>🛒 Your Shopping Cart</h1>

      <div className="cart-items-list">
        {cartItems.map(item => (
          <div className="cart-item-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="unit-price">Unit Price: ${item.price.toFixed(2)}</p>
              <p className="total-price">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <div className="quantity-controls">
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            </div>

            <button className="delete-btn" onClick={() => dispatch(removeItem(item.id))}>
              🗑 Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total Amount: ${cartTotal.toFixed(2)}</h2>
        <div className="cart-actions">
          <button className="continue-btn" onClick={onContinueShopping}>
            ← Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;