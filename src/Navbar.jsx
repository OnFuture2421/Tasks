import { Link } from 'react-router-dom';
import './Navbar.css';
import './pages/CodeUI.css';

const Navbar = () => (
  <nav className='Navbar'>
    <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
      <li style={{ marginRight: '2rem' }}>
        <Link className="btn btn-danger Border fontClass" to="/home" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>Home</Link>
      </li>
      <li style={{ marginRight: '2rem' }}>
        <Link className="btn btn-warning Border fontClass" to="/inline" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CSS inline</Link>
      </li>
      <li style={{ marginRight: '2rem' }}>
        <Link className="btn btn-info Border fontClass" to="/internal" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CSS internal</Link>
      </li>
      <li style={{ marginRight: '2rem' }}>
        <Link className="btn btn-success Border fontClass" to="/external" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CSS external</Link>
      </li>
      <li style={{ marginRight: '2rem' }}>
        <Link className="btn btn-primary Border fontClass" to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About me</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;