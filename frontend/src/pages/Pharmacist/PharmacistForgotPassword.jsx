import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/forgot.css";

// The PharmacistIcon can be a shared component in a real app
const PharmacistIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6v12h.01"></path><path d="M8 10h8"></path><path d="M2 18V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11"></path><path d="M14 22a2 2 0 1 0-4 0"></path>
    </svg>
);

function PharmacistForgotPassword() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage({ type: '', text: '' });

        if (!/\S+@\S+\.\S+/.test(email)) {
            setMessage({ type: 'error', text: 'Please enter a valid email address.' });
            setIsLoading(false);
            return;
        }

        console.log("Submitting Pharmacist password reset for:", email);
        setTimeout(() => {
            setIsLoading(false);
            setMessage({ type: 'success', text: `If a pharmacist account with that email exists, a reset link has been sent.` });
        }, 1500);
    };

    return (
        <div className="forgot-container pharmacist-theme">
            <div className="forgot-card">
                <div className="forgot-header-icon">
                    <PharmacistIcon />
                </div>
                <h2>Pharmacist Password Recovery</h2>
                <p>Enter your registered email address to receive instructions on how to reset your password.</p>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <span className="input-icon">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </span>
                        <input
                            className="forgot-input"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="forgot-btn-primary" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                </form>

                {message.text && (
                    <p className={`feedback-msg ${message.type}`}>
                        {message.text}
                    </p>
                )}

                <Link to="/login" className="forgot-back-link">
                    &larr; Back to Login
                </Link>
            </div>
        </div>
    );
}

export default PharmacistForgotPassword;

