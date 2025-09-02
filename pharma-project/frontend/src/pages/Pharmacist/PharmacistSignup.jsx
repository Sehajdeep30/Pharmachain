import { Link } from "react-router-dom";
import "../styles/Auth.css";

function PharmacistSignup() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Pharmacist Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
        <div className="auth-footer">
          <p>Already have an account?</p>
          <Link to="/pharmacist-login" className="btn-secondary">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default PharmacistSignup;
