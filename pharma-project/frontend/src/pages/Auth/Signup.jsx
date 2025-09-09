import React, { useState } from "react";
import "../styles/Signup.css";

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh",
  "Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha",
  "Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
];

const initialDoctorState = {
  role: "doctor", fullName: "", email: "", password: "", confirmPassword: "",
  phone: "", dateOfBirth: "", gender: "",
  licenseNumber: "", speciality: "", yearsOfExperience: "", qualification: "",
  hospitalName: "", hospitalAddress: "", city: "", state: "", pincode: "", aadharNumber: "", panNumber: ""
};

const initialPharmacistState = {
  role: "pharmacist", fullName: "", email: "", password: "", confirmPassword: "",
  phone: "", dateOfBirth: "", gender: "",
  licenseNumber: "", qualification: "", yearsOfExperience: "",
  pharmacyName: "", addressLine1: "", addressLine2: "", city: "", state: "", pincode: "", gstNumber: "", aadharNumber: ""
};

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialDoctorState);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    setFormData(newRole === "doctor" ? initialDoctorState : initialPharmacistState);
    setErrors({});
  };

  const validateStep = () => {
    const currentErrors = {};
    const fieldsByStep = {
      1: ["fullName", "email", "password", "confirmPassword", "phone", "dateOfBirth", "gender"],
      2: {
        doctor: ["licenseNumber", "speciality", "yearsOfExperience", "qualification"],
        pharmacist: ["licenseNumber", "qualification", "yearsOfExperience"],
      },
      3: {
        doctor: ["hospitalName","hospitalAddress","city","state","pincode","aadharNumber","panNumber"],
        pharmacist: ["pharmacyName","addressLine1","city","state","pincode","gstNumber","aadharNumber"],
      },
    };

    let fieldsToValidate = [];
    if (step === 1) fieldsToValidate = fieldsByStep[1];
    else fieldsToValidate = fieldsByStep[step][formData.role];

    fieldsToValidate.forEach((f) => {
      if (!formData[f] || formData[f].trim() === "") currentErrors[f] = "This field is required.";
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      currentErrors.email = "Enter a valid email address.";
    if (formData.password && formData.password.length < 8)
      currentErrors.password = "Password must be at least 8 characters.";
    if (step === 1 && formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword)
      currentErrors.confirmPassword = "Passwords do not match.";

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleNext = () => { if (validateStep()) setStep((p) => p + 1); };
  const handlePrev = () => { setErrors({}); setStep((p) => p - 1); };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Re-validate the final step before submitting
    if (validateStep()) {
      console.log("Final Data:", formData);
      setMessage(`Successfully submitted registration for ${formData.role}.`);
    }
  };

  const renderField = (name, label, type = "text", options = {}, isPassword = false, showState, setShowState) => {
    const inputType = isPassword ? (showState ? "text" : "password") : type;
    return (
      <div className={`form-group ${options.span2 ? "grid-col-span-2" : ""}`}>
        <label>{label}</label>
        <div className="input-wrapper">
          <input
            className={`form-input ${errors[name] ? "error" : ""}`}
            type={inputType}
            name={name}
            value={formData[name] || ""}
            onChange={handleChange}
            placeholder={options.placeholder || ""}
          />
          {isPassword && (
            <span className="password-toggle-icon" onClick={() => setShowState((prev) => !prev)}>
              {showState ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              )}
            </span>
          )}
        </div>
        {errors[name] && <p className="error-message">{errors[name]}</p>}
      </div>
    );
  };

  const renderSelect = (name, label, values, options = {}) => (
    <div className={`form-group ${options.span2 ? "grid-col-span-2" : ""}`}>
      <label>{label}</label>
      <select
        className={`form-select ${errors[name] ? "error" : ""}`}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
      >
        <option value="">Select...</option>
        {values.map((v) => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>
      {errors[name] && <p className="error-message">{errors[name]}</p>}
    </div>
  );

  const renderStep1 = () => (
    <div className="form-grid">
      <div className="form-group grid-col-span-2">
        <label>Register As</label>
        <select className="form-select" name="role" value={formData.role} onChange={handleRoleChange}>
          <option value="doctor">Doctor</option>
          <option value="pharmacist">Pharmacist</option>
        </select>
      </div>
      {renderField("fullName", "Full Name", "text", { placeholder: "Dr. John Doe" })}
      {renderField("email", "Email Address", "email", { placeholder: "you@example.com" })}
      {renderField("password", "Create Password", "password", { placeholder: "Minimum 8 characters" }, true, showPassword, setShowPassword)}
      {renderField("confirmPassword", "Confirm Password", "password", { placeholder: "Re-enter your password" }, true, showConfirmPassword, setShowConfirmPassword)}
      {renderField("phone", "Phone Number", "tel", { placeholder: "+91 XXXXX XXXXX" })}
      {renderField("dateOfBirth", "Date of Birth", "date")}
      {renderSelect("gender", "Gender", ["Male", "Female", "Other"])}
    </div>
  );

  const renderStep2 = () => formData.role === "doctor" ? (
    <div className="form-grid">
      {renderField("licenseNumber","Medical Council License Number","text",{ placeholder:"e.g., MCI/12345", span2:true })}
      {renderField("speciality","Speciality","text",{ placeholder:"Cardiology" })}
      {renderField("yearsOfExperience","Years of Experience","number",{ placeholder:"5" })}
      {renderField("qualification","Highest Qualification","text",{ placeholder:"MD in Internal Medicine", span2:true })}
    </div>
  ) : (
    <div className="form-grid">
      {renderField("licenseNumber","Pharmacy Council License Number","text",{ placeholder:"e.g., PCI/54321", span2:true })}
      {renderField("qualification","Highest Qualification","text",{ placeholder:"B.Pharm, M.Pharm" })}
      {renderField("yearsOfExperience","Years of Experience","number",{ placeholder:"8" })}
    </div>
  );

  const renderStep3 = () => formData.role === "doctor" ? (
    <div className="form-grid">
      {renderField("hospitalName","Current Hospital / Clinic Name","text",{ span2:true })}
      {renderField("hospitalAddress","Hospital / Clinic Address","text",{ span2:true })}
      {renderField("city","City","text",{ placeholder:"Ghaziabad" })}
      {renderSelect("state","State",indianStates)}
      {renderField("pincode","Pincode")}
      {renderField("aadharNumber","Aadhar Number")}
      {renderField("panNumber","PAN Card Number","text",{ span2:true })}
    </div>
  ) : (
    <div className="form-grid">
      {renderField("pharmacyName","Pharmacy Name","text",{ span2:true })}
      {renderField("addressLine1","Pharmacy Address Line 1","text",{ span2:true })}
      {renderField("addressLine2","Address Line 2 (Optional)","text",{ span2:true })}
      {renderField("city","City","text",{ placeholder:"Ghaziabad" })}
      {renderSelect("state","State",indianStates)}
      {renderField("pincode","Pincode")}
      {renderField("gstNumber","GST Number")}
      {renderField("aadharNumber","Aadhar Number","text",{ span2:true })}
    </div>
  );

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>
          {formData.role === "doctor"
            ? "Create Your Doctor Account"
            : "Create Your Pharmacist Account"}
        </h2>

        <div className="progress-bar">
          <div className={`progress-step ${step >= 1 ? "active" : ""} ${step > 1 ? "completed" : ""}`}>
            <div className="step-circle">1</div><div className="step-label">Account</div>
          </div>
          <div className={`progress-step ${step >= 2 ? "active" : ""} ${step > 2 ? "completed" : ""}`}>
            <div className="step-circle">2</div><div className="step-label">Professional</div>
          </div>
          <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
            <div className="step-circle">3</div><div className="step-label">Contact</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}

          <div className="button-group">
            {step > 1 && <button type="button" className="btn btn-secondary" onClick={handlePrev}>Previous</button>}
            {step < 3 && <button type="button" className="btn btn-primary" onClick={handleNext}>Next Step</button>}
            {step === 3 && <button type="submit" className="btn btn-primary">Create Account</button>}
          </div>
        </form>

        {message && <p className="feedback-msg">{message}</p>}
      </div>
    </div>
  );
}
