import React from "react";
import "./About.css";

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Pioneering the Future of Pharmaceutical Care</h1>
        <p>
          We are dedicated to creating a seamless, secure, and collaborative
          healthcare ecosystem.
        </p>
      </div>

      {/* Story Section */}
      <div className="section">
        <div className="story-mission-container">
          <div>
            <h3>Our Story</h3>
            <p>
              In early 2025, Pharma Project
              was born from a simple observation: the critical communication gap
              between doctors and pharmacists was hindering patient care. Our
              founders, a blend of healthcare and technology experts, witnessed
              firsthand the inefficiencies of paper-based prescriptions, manual
              inventory checks, and fragmented communication. They envisioned a
              unified platform that could bridge this gap, leveraging technology
              to create a safer and more efficient healthcare experience for
              everyone.
            </p>
          </div>
          <img
            src="https://imgs.search.brave.com/pUT0i37A_vJGnMNPsYsBKenV-lFuiEUaOlEGTNHY95Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYXNhbmEuYml6/L3RyYW5zZm9ybS84/ZDQxMjc2YS1iMGQ0/LTQzMTAtYjNmMy1i/MmY4NGJiZDk3ZDgv/aW5saW5lLWNvbGxh/Ym9yYXRpb24tY29s/bGFib3JhdGlvbi1p/bi10aGUtd29ya3Bs/YWNlLTItMng_aW89/dHJhbnNmb3JtOmZp/bGwsd2lkdGg6MjU2/MCZmb3JtYXQ9d2Vi/cA"
            alt="Team collaborating"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="story-mission-container">
          <img
            src="https://imgs.search.brave.com/Lb841hkeEIJ4Gnf9ps8gineCml-KIkclNOzYhautJzU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/OTk1NjAxMy9waG90/by9tZWRpY2FsLXRl/Y2hub2xvZ3ktYWkt/dGVjaG5vbG9neS1p/cy11dGlsaXplZC1i/eS1kb2N0b3JzLWZv/ci1kaWFnbm9zaW5n/LWluY3JlYXNpbmct/dGhlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1rQjlKd3oz/UzhYRmlRTy1kU2t3/R0IxSVVkYlJfb3VM/alJVS0tMUEZLajlZ/PQ"
            alt="Medical technology"
          />
          <div>
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower healthcare professionals by providing
              them with innovative, reliable, and user-friendly digital tools.
              We strive to eliminate medication errors, streamline pharmacy
              operations, and foster a collaborative environment between doctors
              and pharmacists, ultimately leading to better health outcomes for
              patients across India.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section section">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          We are a passionate team of innovators, thinkers, and healthcare
          advocates dedicated to making a difference.
        </p>
        <div className="team-grid">
          <div className="team-member-card">
            <img
              src="https://placehold.co/120x120/E0E7FF/1E40AF?text=SS"
              alt="Aarav Sharma"
            />
            <h4>Sehajdeep Singh</h4>
            <span>Co-Founder & CEO</span>
          </div>
          <div className="team-member-card">
            <img
              src="https://placehold.co/120x120/E0E7FF/1E40AF?text=DP"
              alt="Dr. Priya Desai"
            />
            <h4>Dhruv Pandey</h4>
            <span>Co-Founder & Chief Medical Officer</span>
          </div>
          <div className="team-member-card">
            <img
              src="https://placehold.co/120x120/E0E7FF/1E40AF?text=AM"
              alt="Rohan Kapoor"
            />
            <h4>Advikk Mahajan</h4>
            <span>Chief Technology Officer</span>
          </div>
          <div className="team-member-card">
            <img
              src="https://placehold.co/120x120/E0E7FF/1E40AF?text=AK"
              alt="Sneha Nair"
            />
            <h4>Aditya Kumar</h4>
            <span>Head of Pharmacy Relations</span>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section section">
        <h2 className="section-title">Our Core Values</h2>
        <p className="section-subtitle">
          The principles that guide our work every day.
        </p>
        <div className="values-grid">
          <div className="value-card">
            <div>
              <h4>Patient-Centricity</h4>
              <p>
                Every feature we develop is designed with the patient's safety
                and well-being as the top priority.
              </p>
            </div>
          </div>
          <div className="value-card">
            <div>
              <h4>Integrity & Security</h4>
              <p>
                We are committed to the highest standards of data security and
                professional integrity.
              </p>
            </div>
          </div>
          <div className="value-card">
            <div>
              <h4>Innovation</h4>
              <p>
                We continuously seek innovative solutions to solve the real-world
                challenges of healthcare.
              </p>
            </div>
          </div>
          <div className="value-card">
            <div>
              <h4>Collaboration</h4>
              <p>
                We believe that the best outcomes are achieved when healthcare
                professionals work together seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section section">
        <h2 className="section-title">Join the Healthcare Revolution</h2>
        <p className="section-subtitle">
          Become part of a growing network of professionals dedicated to
          modernizing healthcare. Register today and experience the future of
          pharmaceutical care.
        </p>
        <a href="/signup" className="cta-button">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default AboutPage;
