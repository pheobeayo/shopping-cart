import React, { useState } from 'react';

const Checkout = () => {
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some(f => !f.trim())) {
      setMessage('Please fill out all fields.');
    } else {
      setMessage('Payment Successful! (mock)');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <textarea name="address" placeholder="Address" onChange={handleChange}></textarea>
        <button type="submit">Pay</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Checkout;
