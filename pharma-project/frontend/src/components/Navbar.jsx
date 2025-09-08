import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [showDesktopCard, setShowDesktopCard] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const desktopCardRef = useRef(null);

  // Close desktop card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopCardRef.current && !desktopCardRef.current.contains(event.target)) {
        setShowDesktopCard(false);
      }
    };
    if (showDesktopCard) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDesktopCard]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const closeAllMenus = () => {
    setShowDesktopCard(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">Pharma Project</Link>
        </div>

        {/* Desktop Links & Actions */}
        <div className="navbar-right">
          <div className="navbar-links">
            <Link to="/about">About</Link>
          </div>
          <div className="navbar-links">
            <Link to="/features">Features</Link>
          </div>

          <div className="navbar-actions" ref={desktopCardRef}>
            <button
              className="login-btn"
              onClick={() => setShowDesktopCard((prev) => !prev)}
            >
              Login
            </button>
            <div className={`login-card ${showDesktopCard ? "visible" : ""}`}>
              <div className="card-links">
                <Link to="/login" onClick={closeAllMenus}>
                  Login
                </Link>
                <Link to="/signup" onClick={closeAllMenus}>
                  Register
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-nav-overlay ${
          isMobileMenuOpen ? "visible" : ""
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <div
        className={`mobile-nav-menu ${isMobileMenuOpen ? "visible" : ""}`}
      >
        <div className="mobile-menu-header">
          <h3>Menu</h3>
          <button
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="mobile-nav-links">
          <Link to="/about" onClick={closeAllMenus}>
            About
          </Link>
          <Link to="/features" onClick={closeAllMenus}>
            Features
          </Link>
          <hr />
          <Link to="/login" onClick={closeAllMenus}>
            Login
          </Link>
          <Link to="/signup" onClick={closeAllMenus}>
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
