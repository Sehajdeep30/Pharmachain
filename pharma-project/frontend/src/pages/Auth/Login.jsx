import { useState } from "react";
import "../styles/Login.css"; // ✅ Import styles

const initialFormState = { email: "", password: "" };

function Login() {
  const [role, setRole] = useState("doctor");
  const [formData, setFormData] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          {/* Role Select */}
          <select className="login-select" value={role} onChange={handleRoleChange}>
            <option value="doctor">Login as a Doctor</option>
            <option value="pharmacist">Login as a Pharmacist</option>
          </select>

          {/* Email */}
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password with toggle */}
          <div style={{ position: "relative" }}>
            <input
              className="login-input"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ paddingRight: "40px" }}
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#6b7280", // Tailwind gray-500
              }}
            >
              {showPassword ? (
                // 👁 Eye-off icon
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                // 👁 Eye icon
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading && (
              <span className="spinner">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              </span>
            )}
            {isLoading ? "Logging In..." : "Login"}
          </button>
        </form>

        {message && <p className="feedback-msg">{message}</p>}

        {/* Links */}
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
