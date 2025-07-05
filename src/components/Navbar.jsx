import { Link } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../assets/Dabhe_Mohan.png'

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dar sticky-top" style={{backgroundColor:"#99EDC3"}}>
      <div className="container">
        <Link className="navbar-brand" to="/"><img src={Logo} style={{height:"100px"}}></img></Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!collapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-black" to="/">मुखपृष्ठ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/projects">प्रकल्प</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/culture">संस्कृतिक कार्यक्रम</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/sports">क्रीडा</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/contact">संपर्क</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/about">आमच्याबद्दल</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
