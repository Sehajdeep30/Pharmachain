import { useState } from "react";
import "../styles/Signup.css";

const initialDoctorState = { fullName: "", email: "", password: "", speciality: "", phone: "", hospital: "" };
const initialPharmacistState = { fullName: "", email: "", password: "", pharmacyName: "", licenseNumber: "", phone: "", address: "" };

function Signup() {
  const [role, setRole] = useState("doctor");
  const [formData, setFormData] = useState(initialDoctorState);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    setRole(newRole);
    setMessage("");
    setFormData(newRole === "doctor" ? initialDoctorState : initialPharmacistState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    setTimeout(() => {
      setIsLoading(false);
      if (role === "doctor") {
        console.log("Submitting DOCTOR data:", formData);
        setMessage("Doctor account created successfully!");
      } else {
        console.log("Submitting PHARMACIST data:", formData);
        setMessage("Pharmacist account created successfully!");
      }
    }, 1500);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="card-header">
          <div className="logo">+</div>
          <h2>Create Your Account</h2>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <select className="signup-select" value={role} onChange={handleRoleChange}>
            <option value="doctor">Register as a Doctor</option>
            <option value="pharmacist">Register as a Pharmacist</option>
          </select>

          {/* Show dynamic fields */}
          {role === "doctor" ? (
            <>
              <input className="signup-input" type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
              <input className="signup-input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input className="signup-input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
              <input className="signup-input" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              <input className="signup-input" type="text" name="speciality" placeholder="Speciality" value={formData.speciality} onChange={handleChange} required />
              <input className="signup-input" type="text" name="hospital" placeholder="Hospital / Clinic" value={formData.hospital} onChange={handleChange} required />
            </>
          ) : (
            <>
              <input className="signup-input" type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
              <input className="signup-input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input className="signup-input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
              <input className="signup-input" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              <input className="signup-input" type="text" name="pharmacyName" placeholder="Pharmacy Name" value={formData.pharmacyName} onChange={handleChange} required />
              <input className="signup-input" type="text" name="licenseNumber" placeholder="License Number" value={formData.licenseNumber} onChange={handleChange} required />
              <input className="signup-input" type="text" name="address" placeholder="Pharmacy Address" value={formData.address} onChange={handleChange} required />
            </>
          )}

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {message && <p className="feedback-msg">{message}</p>}

        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
