import React from 'react';
import './components/Navbar.css';

const App = () => (
  <div>
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">CSS inline</a></li>
        <li><a href="#">CSS internal</a></li>
        <li><a href="#">CSS external</a></li>
      </ul>
    </nav>
    {/* Your page content here */}
  </div>
);

export default App;