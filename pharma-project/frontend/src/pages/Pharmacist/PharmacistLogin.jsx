import { Link } from "react-router-dom";
import "./../styles/Login.css";

import { FaEnvelope, FaLock } from "react-icons/fa";

function PharmacistLogin() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Pharmacist Login</h2>
        <form>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-text">
          Don’t have an account? <Link to="/pharmacist-signup">Sign up</Link>
        </p>
         {/* Forgot Password */}
          <p className="forgot-password">
            <a href="/pharmacist-forgot-password">Forgot Password?</a>
          </p>
      </div>
    </div>
  );
}

export default PharmacistLogin;
