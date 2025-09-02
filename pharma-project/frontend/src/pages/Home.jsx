// import React from "react";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="welcome-card">
//         <h1>Welcome to Pharma Project</h1>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Welcome Section */}
      <div className="welcome-card">
        <h1>
          Welcome to <span className="highlight">Pharma Project</span>
        </h1>
        <p className="subtitle">
          A platform that connects <b>Doctors</b> and <b>Pharmacists</b> for better patient care.
        </p>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Pharma Project</h2>
        <p>
          Pharma Project helps doctors manage prescriptions and pharmacists handle inventory easily. 
          This system ensures safe, accurate, and efficient patient medication management.
        </p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>📋 Easy Prescription Management</li>
          <li>💊 Real-time Inventory Updates</li>
          <li>📊 Reports & Analytics</li>
          <li>👩‍⚕️ Doctor & Pharmacist Collaboration</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
