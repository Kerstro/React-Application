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
        <p>Bring nature into your home with our handpicked collection of beautiful houseplants.</p>
        <button className="get-started-btn" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('landing'); // landing | products | cart | about

  return (
    <Provider store={store}>
      {page === 'landing' && (
        <LandingPage onGetStarted={() => setPage('products')} />
      )}
      {page !== 'landing' && (
        <>
          <ProductList
            currentPage={page}
            onNavigate={setPage}
          />
          {page === 'cart' && <CartItem onContinueShopping={() => setPage('products')} />}
          {page === 'about' && <AboutUs />}
        </>
      )}
    </Provider>
  );
}

export default App;