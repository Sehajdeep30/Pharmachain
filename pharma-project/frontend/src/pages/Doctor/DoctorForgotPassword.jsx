import { Link } from "react-router-dom";
import "../styles/forgot.css";

function DoctorForgotPassword() {
  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Forgot Password</h2>
        <p>Please provide your email address to reset your password.</p>
        <form>
          <input type="email" placeholder="Email" required />
          <button type="submit" className="forgot-btn-primary">
            Send Reset Link
          </button>
        </form>
        <Link to="/doctor-login" className="forgot-back-link">Back to Login</Link>
      </div>
    </div>
  );
}

export default DoctorForgotPassword;
