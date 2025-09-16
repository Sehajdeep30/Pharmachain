import React, { useEffect, useState } from "react";
import "./Home.css";

const images = [
  "https://imgs.search.brave.com/_bUIEbDUBcph44YIpRi56GrjLBTvvrX-8yVlas9E_8Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzgxLzk5LzM0/LzM2MF9GXzgxOTkz/NDAyX3ZiWWFJN2c3/RFl3OVhBVUcxSlE3/UmtBcEdBc1ZTV0dF/LmpwZw",
  "https://imgs.search.brave.com/OmQL4M4BpourmuLCO8H9Z6gyB40TYETRkETSVOX_SvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/OTExNjQ1OC9waG90/by9mYXJtYWNpYS1w/aGFybWFjeS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9QWxo/bm0xTmw3Xy1HN3FC/U1VtRVM4dk1vT1JN/Z0ItM2JDUFc0QkZ3/Y0lqQT0",
  "https://imgs.search.brave.com/InoGFa_q0eKPWHNPUVbFsiSZq_oQJ48eLRvQqD39f20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/ZWRpY2FsLWxhYi13/b3JrZXItYW5hbHl6/aW5nLWJsb29kLXNl/cnVtLWNvbmR1Y3Rp/bmctdmlydXMtdGVz/dC1tb2Rlcm4tZXF1/aXBwZWQtbGFiLWxh/dGUtbmlnaHQtdGVh/bS1zcGVjaWFsaXN0/cy1leGFtaW5pbmct/dmFjY2luZS1ldm9s/dXRpb24tdXNpbmct/aGlnaC10ZWNoLXRy/ZWF0bWVudC1hZ2Fp/bnN0LWNvdmlkMTlf/NDgyMjU3LTEzNjIx/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA",
  "https://imgs.search.brave.com/Zshgq9_rw4jJEtQ1Lgwdr1ZRk4sW8b_mRqw6naxj5T8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzA2LzU4LzI2/LzM2MF9GXzQwNjU4/MjY0Ml9CaExFN3BW/UmEyTmNTVUNNVkJj/MmRGSkl2bWtkYkVi/ZC5qcGc",
];

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible"); // allows repeat animation
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
};

const Home = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useScrollAnimation();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % images.length;
      setCurrentImage(images[i]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Welcome */}
      <div className="welcome-card section animate-on-scroll animate-zoom-in">
        <h1>
          Welcome to <span className="highlight">Pharma Project</span>
        </h1>
        <p className="subtitle">
          A seamless platform connecting <b>Doctors</b> and <b>Pharmacists</b>{" "}
          for enhanced patient care.
        </p>
      </div>

      {/* About */}
      <div className="about-section section animate-on-scroll animate-fade-up">
        <h2 className="section-title">About Our Platform</h2>
        <p>
          Pharma Project streamlines prescriptions and inventory workflow. Our
          system empowers doctors and pharmacists to ensure safe and efficient
          patient care.
        </p>
      </div>

      {/* Features */}
      <div className="features-section section">
        <h2 className="section-title animate-on-scroll animate-fade-up">
          Our Core Features
        </h2>
        <div className="card-container">
          {[
            {
              icon: "📋",
              title: "Digital Prescriptions",
              desc: "Create, send, and manage digital prescriptions securely.",
            },
            {
              icon: "💊",
              title: "Real-Time Inventory",
              desc: "Get instant updates and manage stock levels efficiently.",
            },
            {
              icon: "📊",
              title: "Insightful Analytics",
              desc: "Generate reports for better decision-making.",
            },
            {
              icon: "👩‍⚕️",
              title: "Secure Collaboration",
              desc: "Seamless communication between doctors and pharmacists.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="feature-card card-item animate-on-scroll animate-fade-up"
            >
              <h3>
                {feature.icon} {feature.title}
              </h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="how-it-works-section section">
        <h2 className="section-title animate-on-scroll animate-fade-up">
          How It Works
        </h2>
        <div className="how-it-works-container">
          {[
            {
              step: 1,
              title: "Register",
              desc: "Create a secure account as a Doctor or Pharmacist.",
            },
            {
              step: 2,
              title: "Prescribe & Dispense",
              desc: "Doctors issue digital prescriptions, pharmacists manage them instantly.",
            },
            {
              step: 3,
              title: "Collaborate",
              desc: "Communicate seamlessly for optimal patient care.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className={`step-card animate-on-scroll ${
                i % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
              }`}
            >
              <div className="step-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section section">
        <h2 className="section-title animate-on-scroll animate-fade-up">
          Trusted by Professionals
        </h2>
        <div className="card-container">
          {[
            {
              text:
                "This platform has revolutionized how I handle prescriptions. It's fast and secure.",
              author: "Dr. Evelyn Reed",
              role: "Cardiologist",
            },
            {
              text:
                "Managing inventory has never been easier. Real-time updates improve efficiency.",
              author: "Mark Chen",
              role: "Lead Pharmacist",
            },
          ].map((t, i) => (
            <div
              key={i}
              className={`testimonial-card card-item animate-on-scroll ${
                i % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
              }`}
            >
              <p>"{t.text}"</p>
              <div className="testimonial-author">
                <strong>{t.author}</strong> <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Random Image */}
      <div className="media-section section animate-on-scroll animate-zoom-in">
        <h2 className="section-title">Healthcare in Action</h2>
        <img src={currentImage} alt="Healthcare" className="random-image" />
      </div>

      {/* Video */}
      <div className="media-section section animate-on-scroll animate-fade-up">
        <h2 className="section-title">Watch How It Works</h2>
        <video autoPlay loop muted playsInline className="demo-video">
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Home;
