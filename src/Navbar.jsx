import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className='Navbar'>
    <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
      <li style={{ marginRight: '2rem' }}>
        <Link className='btn btn-danger' to="/home" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      </li>
      <li style={{ marginRight: '2rem' }}>
        <Link className='btn btn-warning' to="/inline" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CSS inline</Link>
      </li>
      <li style={{ marginRight: '2rem' }}>
        <Link className='btn btn-info' to="/internal" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CSS internal</Link>
      </li>
      <li style={{ marginRight: '2rem' }}>
        <Link className='btn btn-success' to="/external" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CSS external</Link>
      </li>
      <li style={{ marginRight: '2rem' }}>
        <Link className='btn btn-primary' to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About me</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;