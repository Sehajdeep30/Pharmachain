import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Pharma Project</Link>
      </div>
      <div className="navbar-links">
        <Link to="/doctor-login">Doctor</Link>
        <Link to="/pharmacist-login">Pharmacist</Link>
      </div>
    </nav>
  );
}

export default Navbar;
