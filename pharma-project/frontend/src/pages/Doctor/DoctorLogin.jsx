import "./../styles/Login.css";

import { FaEnvelope, FaLock } from "react-icons/fa";

function DoctorLogin() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Doctor Login</h2>
        <form>
          {/* Email */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" required />
          </div>

          {/* Password */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>

          {/* Button */}
          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="/doctor-signup">Sign up</a>
        </p>
          {/* Forgot Password */}
          <p className="forgot-password">
            <a href="/doctor-forgot-password">Forgot Password?</a>
          </p>
      </div>
    </div>
  );
}

export default DoctorLogin;
