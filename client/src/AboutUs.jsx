import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";

export function AboutUs() {
  return (
    <div className="about-page">

      {/* ---------- Banner Section ---------- */}
      <div className="banner-section">
        <img
          src="src/AboutUs.jpg"
          alt="Yoga Meditation Peace Banner"
          className="banner-image"
        />
        <div className="banner-text">
          <h1 className="display-4 fw-bold text-white">Welcome to Our Yoga Center</h1>
          <p className="lead text-white">
            “Find Your Inner Peace Through Yoga & Mindfulness”
          </p>
        </div>
      </div>

      {/* ---------- Info Section ---------- */}
      <div className="container text-center my-5 fade-in">
        <h2 className="fw-bold mb-4 text-success">About Our Yoga Center</h2>
        <p className="text-muted fs-5">
          Our Yoga Center is dedicated to helping individuals achieve harmony between mind, body, and soul.  
          We provide a peaceful environment surrounded by nature, where you can disconnect from daily stress  
          and reconnect with your true self. Our certified instructors guide you through yoga, meditation,  
          and relaxation techniques suitable for all levels.
        </p>
        <p className="text-muted fs-5">
          Join us on this journey of self-discovery and wellness.  
          Experience the balance, positivity, and calmness that yoga brings into everyday life.
        </p>
      </div>

      {/* ---------- Developer Cards Section ---------- */}
      <div className="container my-5 fade-in">
        <h3 className="text-center fw-bold mb-4 text-success">Meet Our Developers</h3>
        <div className="row justify-content-center">

          {/* Developer 1 - Komal */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 developer-card">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="card-img-top"
                alt="Komal Jadhav"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-primary">Komal Jadhav</h5>
                <p className="card-text text-muted">Full Stack MERN Developer</p>
                <p className="small text-secondary">
                  A creative and passionate developer skilled in React, Node.js, Express, and MongoDB.  
                  Komal focuses on building elegant UI and smooth backend logic, ensuring delightful user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Developer 2 - Yash */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 developer-card">
              <img
                src="https://randomuser.me/api/portraits/men/52.jpg"
                className="card-img-top"
                alt="Yash Mankumare"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-primary">Yash Mankumare</h5>
                <p className="card-text text-muted">Full Stack MERN Developer</p>
                <p className="small text-secondary">
                  Yash is a skilled full stack developer who loves building scalable web applications  
                  and crafting seamless backend APIs. His analytical mindset and design sense make his projects shine.
                </p>
              </div>
            </div>
          </div>

          {/* Developer 3 - Sarthak */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 developer-card">
              <img
                src="https://randomuser.me/api/portraits/men/41.jpg"
                className="card-img-top"
                alt="Sarthak Sambare"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-primary">Sarthak Sambare</h5>
                <p className="card-text text-muted">Full Stack MERN Developer</p>
                <p className="small text-secondary">
                  Sarthak is a versatile developer proficient in frontend and backend integration.  
                  He enjoys building efficient, data-driven applications and ensuring smooth RESTful communications.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
