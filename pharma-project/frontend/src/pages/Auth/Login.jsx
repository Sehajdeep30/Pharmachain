import { useState } from "react";
import "../styles/Login.css"; // ✅ Import styles

const initialFormState = { identifier: "", password: "" };

function Login() {
  const [role, setRole] = useState("doctor");
  const [formData, setFormData] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    setRole(newRole);
    setFormData(initialFormState); // Reset form when role changes
    setMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Simulated API
    setTimeout(() => {
      setIsLoading(false);
      if (role === "doctor") {
        console.log("Logging in DOCTOR with:", formData);
        setMessage("Doctor login successful!");
      } else {
        console.log("Logging in PHARMACIST with:", formData);
        setMessage("Pharmacist login successful!");
      }
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card2">
        <h2>{role === "doctor" ? "Doctor Login" : "Pharmacist Login"}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <select className="login-select" value={role} onChange={handleRoleChange}>
            <option value="doctor">Login as a Doctor</option>
            <option value="pharmacist">Login as a Pharmacist</option>
          </select>

          <input
            className="login-input"
            type="text"
            name="identifier"
            placeholder={role === "doctor" ? "Medical License ID" : "Pharmacy License ID"}
            value={formData.identifier}
            onChange={handleChange}
            required
          />

          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading && (
              <span className="spinner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              </span>
            )}
            {isLoading ? "Logging In..." : "Login"}
          </button>
        </form>

        {message && <p className="feedback-msg">{message}</p>}

        <div className="extra-links">
          <a href={`/${role}-forgot-password`}>Forgot Password?</a>
          <span style={{ margin: "0 8px" }}>·</span>
          <a href="/signup">Create an Account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
