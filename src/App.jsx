import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>Bring nature into your home with our handpicked collection.</p>
        <button className="get-started-btn" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('landing');

  const handleNavigate = (target) => setPage(target);

  return (
    <Provider store={store}>
      <div className="app-container">
        {page === 'landing' && <LandingPage onGetStarted={() => setPage('products')} />}
        {page === 'products' && <ProductList onNavigate={handleNavigate} />}
        {page === 'cart' && <CartItem onContinueShopping={() => setPage('products')} onNavigate={handleNavigate} />}
        {page === 'about' && <AboutUs />}
      </div>
    </Provider>
  );
}

export default App;