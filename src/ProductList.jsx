import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartCount, selectCartItems } from './features/cart/CartSlice';

const plantsData = [
  // Tropical Plants
  { id: 1, name: 'Monstera Deliciosa', price: 15, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
  { id: 2, name: 'Bird of Paradise', price: 22, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1598880940942-95751b3f74fe?w=400' },
  { id: 3, name: 'Philodendron', price: 13, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400' },
  { id: 4, name: 'Pothos', price: 9, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400' },
  { id: 5, name: 'Peace Lily', price: 14, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=400' },
  { id: 6, name: 'Anthurium', price: 18, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400' },
  // Succulents & Cacti
  { id: 7, name: 'Aloe Vera', price: 8, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { id: 8, name: 'Echeveria', price: 7, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
  { id: 9, name: 'Jade Plant', price: 11, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
  { id: 10, name: 'Barrel Cactus', price: 10, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
  { id: 11, name: 'Snake Plant', price: 12, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1593433551231-ca5aee9932ad?w=400' },
  { id: 12, name: 'String of Pearls', price: 16, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3?w=400' },
  // Air Purifying
  { id: 13, name: 'Spider Plant', price: 12, category: 'Air Purifying', image: 'https://images.unsplash.com/photo-1572688066243-29a61247960c?w=400' },
  { id: 14, name: 'Boston Fern', price: 15, category: 'Air Purifying', image: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=400' },
  { id: 15, name: 'Areca Palm', price: 25, category: 'Air Purifying', image: 'https://images.unsplash.com/photo-1512428813824-f713c2448406?w=400' },
  { id: 16, name: 'Rubber Plant', price: 19, category: 'Air Purifying', image: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?w=400' },
  { id: 17, name: 'Bamboo Palm', price: 22, category: 'Air Purifying', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400' },
  { id: 18, name: 'English Ivy', price: 10, category: 'Air Purifying', image: 'https://images.unsplash.com/photo-1622383529357-37b773f331f1?w=400' }
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);

  const categories = [...new Set(plantsData.map(p => p.category))];

  return (
    <div className="product-listing">
      <nav className="navbar">
        <a href="#" className="navbar-brand" onClick={() => onNavigate('landing')}>Paradise Nursery</a>
        <ul className="navbar-links">
          <li><a href="#" onClick={() => onNavigate('products')}>Home</a></li>
          <li><a href="#" onClick={() => onNavigate('products')}>Plants</a></li>
          <li>
            <div className="cart-icon" onClick={() => onNavigate('cart')}>
              🛒 <span className="cart-count">{cartCount}</span>
            </div>
          </li>
        </ul>
      </nav>

      {categories.map(cat => (
        <div key={cat} className="category-section">
          <h2>{cat}</h2>
          <div className="products-grid">
            {plantsData.filter(p => p.category === cat).map(plant => {
              const isAdded = cartItems.find(item => item.id === plant.id);
              return (
                <div key={plant.id} className="product-card">
                  <img src={plant.image} alt={plant.name} className="product-image" />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price}</p>
                  <button 
                    className="add-to-cart-btn"
                    disabled={!!isAdded}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {isAdded ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;