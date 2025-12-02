import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/logo.png";
import "../assets/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = () => setOpenSubmenu(!openSubmenu);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(false);
  }, [location]);

  return (
    <header className="header">
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="Maidora Logo" className="logo" />
        </Link>
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
        <li>
            <Link to="/about">Company</Link>
          </li>
          <li className={`menu-item ${openSubmenu ? "submenu-open" : ""}`}>
            <div className="submenu-header" onClick={toggleSubmenu}>
              <span>Resources</span>
              <FiChevronDown className="arrow-icon" />
            </div>

            <ul className="dropdown">
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/case-study">Case Study</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/career">Career</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
        </ul>
        <ul className="nav-actions">
          <li>
            <Link to="/contact" className="getButton">Get Started</Link>
          </li>
          <li>
            <button className="login-btn" onClick={() => (window.location.href = "/login")}>
              Login
            </button>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={35} /> : <FiMenu size={35} />}
      </button>
    </header>
  );
};

export default Header;
