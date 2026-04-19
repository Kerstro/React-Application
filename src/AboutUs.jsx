import React from 'react';

function AboutUs() {
  return (
    <div style={{ padding: '50px 30px', background: '#f1f8e9', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <h1 style={{ color: '#2e7d32', marginBottom: '16px' }}>About Paradise Nursery</h1>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
          Welcome to <strong>Paradise Nursery</strong> — your one-stop destination for beautiful,
          healthy houseplants. Founded with a passion for bringing nature indoors, we believe that
          every home deserves a touch of greenery.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
          We carefully curate a wide selection of houseplants — from air-purifying favorites to
          rare tropical specimens — to suit every taste and lifestyle. Whether you're a first-time
          plant parent or a seasoned botanist, we have the perfect plant for you.
        </p>
        <h2 style={{ color: '#388e3c', marginBottom: '12px' }}>Our Mission</h2>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
          To make plant ownership accessible, enjoyable, and rewarding for everyone by providing
          premium quality plants, expert care guides, and exceptional customer service.
        </p>
        <h2 style={{ color: '#388e3c', marginBottom: '12px' }}>Why Choose Us?</h2>
        <ul style={{ fontSize: '1.05rem', color: '#555', lineHeight: '2', paddingLeft: '20px' }}>
          <li>🌱 Hand-selected, healthy plants sourced from trusted growers</li>
          <li>📦 Careful packaging to ensure safe delivery</li>
          <li>💚 Dedicated support for plant care questions</li>
          <li>🌍 Eco-friendly and sustainable practices</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;