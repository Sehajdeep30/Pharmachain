import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Assets
import loginImage from "../assets/login.png";
import signupImage from "../assets/signup.png";
import doctorLoginImg from "../assets/doctor-login.png";
import pharmacistLoginImg from "../assets/pharmacist-login.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState("main"); // main | login | signup

  useEffect(() => {
    document.body.style.overflow =
      isMobileMenuOpen || showModal ? "hidden" : "unset";
  }, [isMobileMenuOpen, showModal]);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setShowModal(false);
    setModalStep("main");
  };

  return (
    <>
      {/* Navbar */}
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
          <button
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
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
          <Link to="/login" onClick={closeAllMenus}>Login</Link>
          <Link to="/signup" onClick={closeAllMenus}>Register</Link>
        
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay visible" onClick={closeAllMenus}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAllMenus}>
              ×
            </button>

            <div className="modal-header">
              {modalStep === "main" && (
                <>
                  <h2>Welcome to Pharma Project</h2>
                  <p>Please select an option to continue.</p>
                </>
              )}
              {modalStep === "login" && (
                <>
                  <h2>Login Options</h2>
                  <p>Select your role to continue login.</p>
                </>
              )}
              {modalStep === "signup" && (
                <>
                  <h2>Signup Options</h2>
                  <p>Select your role to create account.</p>
                </>
              )}
            </div>

            {/* Step 1: Main */}
            {modalStep === "main" && (
              <div className="modal-options">
                <div
                  className="option-card"
                  onClick={() => setModalStep("login")}
                >
                  <img src={loginImage} alt="Login" />
                  <div className="option-text">
                    <h3>Login</h3>
                    <p>Access your existing account</p>
                  </div>
                </div>
                <div
                  className="option-card"
                  onClick={() => setModalStep("signup")}
                >
                  <img src={signupImage} alt="Signup" />
                  <div className="option-text">
                    <h3>Register</h3>
                    <p>Create a new professional account</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Login */}
            {modalStep === "login" && (
              <div className="modal-options">
                <Link
                  to="/login?role=doctor"
                  onClick={closeAllMenus}
                  className="option-card"
                >
                  <img src={doctorLoginImg} alt="Doctor Login" />
                  <div className="option-text">
                    <h3>👨‍⚕️ Doctor Login</h3>
                    <p>Access doctor dashboard</p>
                  </div>
                </Link>
                <Link
                  to="/login?role=pharmacist"
                  onClick={closeAllMenus}
                  className="option-card"
                >
                  <img src={pharmacistLoginImg} alt="Pharmacist Login" />
                  <div className="option-text">
                    <h3>💊 Pharmacist Login</h3>
                    <p>Access pharmacy dashboard</p>
                  </div>
                </Link>
              </div>
            )}

            {/* Step 3: Signup */}
            {modalStep === "signup" && (
              <div className="modal-options">
                <Link
                  to="/signup?role=doctor"
                  onClick={closeAllMenus}
                  className="option-card"
                >
                  <img src={doctorLoginImg} alt="Doctor Signup" />
                  <div className="option-text">
                    <h3>👨‍⚕️ Doctor Signup</h3>
                    <p>Create your doctor account</p>
                  </div>
                </Link>
                <Link
                  to="/signup?role=pharmacist"
                  onClick={closeAllMenus}
                  className="option-card"
                >
                  <img src={pharmacistLoginImg} alt="Pharmacist Signup" />
                  <div className="option-text">
                    <h3>💊 Pharmacist Signup</h3>
                    <p>Create your pharmacist account</p>
                  </div>
                </Link>
              </div>
            )}

            {/* Footer */}
            {modalStep !== "main" && (
              <div className="modal-footer">
                <button
                  className="btn-back"
                  onClick={() => setModalStep("main")}
                >
                  ← Back
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
