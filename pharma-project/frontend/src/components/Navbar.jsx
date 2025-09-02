// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">Pharma Project</Link>
//       </div>
//       <div className="navbar-links">
//         <Link to="/doctor-login">Doctor</Link>
//         <Link to="/pharmacist-login">Pharmacist</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);

  const toggleCard = () => {
    setShowCard((prev) => !prev);
  };

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowCard(false);
      }
    };

    if (showCard) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCard]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Pharma Project</Link>
      </div>

      <div className="navbar-actions" ref={cardRef}>
        <button className="login-btn" onClick={toggleCard}>
          Login
        </button>

        <div className={`login-card ${showCard ? "visible" : ""}`}>
          {/* <h4>Select Your Role</h4> */}
          <div className="card-links">
            <Link to="/login" onClick={() => setShowCard(false)}>
              Login
            </Link>
            <Link to="/signup" onClick={() => setShowCard(false)}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
