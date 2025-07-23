import React from 'react';

const Navbar = () => (
  <nav style={{ background: 'purple', padding: '1rem' }}>
    <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
      <li style={{ marginRight: '2rem' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
      </li>
      <li style={{ marginRight: '2rem' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CSS inline</a>
      </li>
      <li style={{ marginRight: '2rem' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CSS internal</a>
      </li>
      <li>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CSS external</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;