import React, { useState } from 'react';
import { validateCoupon, isValidQuantity } from '../utils/validators';

const Cart = ({ cart, updateCart, removeItem }) => {
  const [coupon, setCoupon] = useState('');
  const [error, setError] = useState('');

  const handleQuantityChange = (id, qty) => {
    const quantity = parseInt(qty);
    if (!isValidQuantity(quantity)) {
      setError('Invalid quantity');
      return;
    }
    updateCart(id, quantity);
    setError('');
  };

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const discount = validateCoupon(coupon) ? 0.1 * total : 0;
  const finalTotal = total - discount;

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
          />
          <span>${item.price * item.quantity}</span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <div>
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button onClick={() => setError(validateCoupon(coupon) ? '' : 'Invalid coupon')}>
          Apply Coupon
        </button>
        {error && <p className="error">{error}</p>}
      </div>
      <h3>Total: ${finalTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
