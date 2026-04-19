import React from 'react';

function AboutUs() {
  return (
    <div style={{ padding: '50px 30px', background: '#f1f8e9', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <h1 style={{ color: '#2e7d32', marginBottom: '16px', textAlign: 'center' }}>About Paradise Nursery</h1>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
          Welcome to <strong>Paradise Nursery</strong> — your premier destination for high-quality, healthy houseplants. Founded with a deep-rooted passion for bringing the tranquility of nature indoors, we believe every home and workspace deserves a touch of greenery.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
          Our expert team carefully curates each plant, ensuring they are robust and ready to thrive in your environment. Whether you are a seasoned plant parent or just starting your journey, we offer a diverse selection tailored to your needs.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', textAlign: 'center', fontWeight: 'bold', color: '#2e7d32' }}>
          Join us in making the world a greener place, one leaf at a time.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;