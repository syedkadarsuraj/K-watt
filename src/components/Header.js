import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="header-inner">
        {/* LOGO (Always on the Left) */}
        <Link to="/" className="logo-link" aria-label="Go to Home">
          <img
            src={require("../assets/images/logo.jpeg")} // ✅ update path to your actual logo
            alt="Logo"
            className="logo-img"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        {/* HAMBURGER MENU ICON (mobile) */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* BACKDROP */}
      <div
        className={`menu-backdrop ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* SLIDE-OUT MOBILE MENU */}
      <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
