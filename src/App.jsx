import React from 'react';
import Navbar from './Navbar.jsx';
import Home from './pages/Home.jsx';
import Inline from './pages/Inline.jsx'; 
import Internal from './pages/Internal.jsx';
import External from './pages/External.jsx';
import About from './pages/About.jsx'; 
import 'bootstrap/dist/css/bootstrap.css'

import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inline" element={<Inline />} />
          <Route path="/internal" element={<Internal />} />
          <Route path="/external" element={<External />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;