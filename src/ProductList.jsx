import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartCount, selectCartItems } from './features/cart/CartSlice';

const plantsData = [
  // Tropical Plants
  { id: 1, name: 'Monstera Deliciosa', price: 15.99, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
  { id: 2, name: 'Bird of Paradise', price: 22.99, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1598880940942-95751b3f74fe?w=400' },
  { id: 3, name: 'Philodendron', price: 13.99, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400' },
  { id: 4, name: 'Pothos', price: 9.99, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400' },
  { id: 5, name: 'Peace Lily', price: 14.99, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=400' },
  { id: 6, name: 'Anthurium', price: 18.99, category: 'Tropical Plants', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400' },
  // Succulents & Cacti
  { id: 7, name: 'Aloe Vera', price: 8.99, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { id: 8, name: 'Echeveria', price: 7.99, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
  { id: 9, name: 'Jade Plant', price: 11.99, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
  { id: 10, name: 'Barrel Cactus', price: 10.99, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
  { id: 11, name: 'Haworthia', price: 9.49, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400' },
  { id: 12, name: 'Sedum', price: 8.49, category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400' },
  // Air-Purifying Plants
  { id: 13, name: 'Snake Plant', price: 12.99, category: 'Air-Purifying Plants', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400' },
  { id: 14, name: 'Spider Plant', price: 10.99, category: 'Air-Purifying Plants', image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400' },
  { id: 15, name: 'ZZ Plant', price: 16.99, category: 'Air-Purifying Plants', image: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400' },
  { id: 16, name: 'Boston Fern', price: 13.49, category: 'Air-Purifying Plants', image: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=400' },
  { id: 17, name: 'Dracaena', price: 14.99, category: 'Air-Purifying Plants', image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=400' },
  { id: 18, name: 'Rubber Plant', price: 17.99, category: 'Air-Purifying Plants', image: 'https://images.unsplash.com/photo-1567225477277-c8162eb596b8?w=400' },
];

const categories = [...new Set(plantsData.map(p => p.category))];

function Navbar({ cartCount, onNavigate }) {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#" onClick={() => onNavigate('products')}>🌿 Paradise Nursery</a>
      <ul className="navbar-links">
        <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Home</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Plants</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Us</a></li>
        <li>
          <span className="cart-icon" onClick={() => onNavigate('cart')}>
            🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </span>
        </li>
      </ul>
    </nav>
  );
}

function ProductList({ currentPage, onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <Navbar cartCount={cartCount} onNavigate={onNavigate} />
      {currentPage === 'products' && (
        <div className="product-listing">
          {categories.map(category => (
            <div className="category-section" key={category}>
              <h2>{category}</h2>
              <div className="products-grid">
                {plantsData
                  .filter(plant => plant.category === category)
                  .map(plant => (
                    <div className="product-card" key={plant.id}>
                      <img src={plant.image} alt={plant.name} />
                      <h3>{plant.name}</h3>
                      <p className="price">${plant.price.toFixed(2)}</p>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id) ? '✓ Added' : 'Add to Cart'}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ProductList;