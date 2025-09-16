import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import loginImage from "../assets/login.png";
import signupImage from "../assets/signup.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen || showModal ? "hidden" : "unset";
  }, [isMobileMenuOpen, showModal]);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setShowModal(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">Pharma Project</Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-links">
            <Link to="/about">About</Link>
          </div>
          <div className="navbar-links">
            <Link to="/features">Features</Link>
          </div>
          <div className="navbar-actions">
            <button className="login-btn" onClick={() => setShowModal(true)}>
              Login
            </button>
          </div>
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
        className={`mobile-nav-overlay ${isMobileMenuOpen ? "visible" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? "visible" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Menu</h3>
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
            ×
          </button>
        </div>
        <div className="mobile-nav-links">
          <Link to="/about" onClick={closeAllMenus}>About</Link>
          <Link to="/features" onClick={closeAllMenus}>Features</Link>
          <hr />
          <Link to="/login" onClick={closeAllMenus}>Login</Link>
          <Link to="/signup" onClick={closeAllMenus}>Register</Link>
        </div>
      </div>

      {/* Login / Signup Modal */}
      {showModal && (
        <div className="modal-overlay visible" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Welcome to Pharma Project</h2>
              <p>Please select an option to continue.</p>
            </div>
            <div className="modal-options">
              <Link to="/login" onClick={closeAllMenus} className="option-card">
                <img src={loginImage} alt="Login" />
                <div className="option-text">
                  <h3>Login</h3>
                  <p>Access your existing account</p>
                </div>
              </Link>
              <Link to="/signup" onClick={closeAllMenus} className="option-card">
                <img src={signupImage} alt="Signup" />
                <div className="option-text">
                  <h3>Signup</h3>
                  <p>Create a new professional account</p>
                </div>
              </Link>
            </div>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
