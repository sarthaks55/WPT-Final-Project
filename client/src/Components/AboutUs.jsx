import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AboutUs.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { color, motion } from "framer-motion";
import { FaLeaf, FaHeart, FaSpa } from "react-icons/fa";
import lotusLogo from "../assets/images/lotus_logo_svg.svg"; 
import founderImg from "../assets/images/founder.png"; 
import YashImg from "../assets/images/Yash.png";
 import KomalImg from "../assets/images/Komal.png";
import '../assets/css/about.css';

export function AboutUs() {
  return (
    
    
     <div className="aboutus-bg">
      <Container className="py-5">
        {/* Title Section */}
        <div  className="text-center mb-5" ><img src={lotusLogo} alt="Lotus Logo" className="about-lotus mb-3" />
          <h2 className="text-danger fw-bold">About Us</h2>
          <p className="text-muted w-75 mx-auto">
            Welcome to <strong>The Yoga Center</strong> — a sanctuary of peace,
            balance, and inner transformation. Since our founding, we have been
            committed to spreading the art and science of yoga to every soul
            seeking wellness and harmony.
          </p></div>
          
        

        {/* Mission and Vision */}
        <Row className="gy-4 justify-content-center">
          <Col md={5}>
           <div  className="p-4 rounded-4 shadow-sm bg-white h-100">
              <div className="text-center mb-3">
                <FaLeaf color="#ca4625" size={35} />
              </div>
              <h4 className="text-center text-danger">Our Mission</h4>
              <p className="text-muted text-center">
                To make yoga accessible to everyone — bridging traditional
                knowledge and modern lifestyle. We strive to help people achieve
                physical health, mental peace, and spiritual clarity.
              </p>
            </div>
          </Col>
          <Col md={5}>
            <div  className="p-4 rounded-4 shadow-sm bg-white h-100">
              <div className="text-center mb-3">
                <FaHeart color="#ca4625" size={35} />
              </div>
              <h4 className="text-center text-danger">Our Vision</h4>
              <p className="text-muted text-center">
                A world where yoga becomes a way of life — bringing compassion,
                mindfulness, and balance to every heart and home.
              </p>
            </div>
          </Col>
        </Row>
<Row className="px-5">
        <Row className="align-items-center justify-content-center my-4 ">
          <Col md={3} className="text-center ">
            <img
              src={founderImg}
              alt="Sarthak"
              className="rounded-circle founder-img shadow"
            />
          </Col>
          <Col md={8}>
            <h4 className="text-danger">Sarthak Sambare</h4>
            <p className="text-muted info">
              <strong>Sarthak</strong> is a versatile developer proficient in frontend and backend integration.He enjoys building efficient, data-driven applications and ensuring smooth RESTful communications.
            </p>
          </Col>
        </Row>

         <Row className="align-items-center justify-content-center my-4 ">
          
          <Col md={3} className="text-center">
            <img
              src={KomalImg}
              alt="Komal Image"
              className="rounded-circle founder-img shadow"
              
            />
          </Col>
          <Col md={8}>
            <h4 className="text-danger">Komal Jadhav</h4>
            <p className="text-muted info">
               A creative and passionate developer skilled in React, Node.js, Express, and MongoDB.  
              <strong>Komal</strong> focuses on building elegant UI and smooth backend logic, ensuring delightful user experiences.
            </p>
          </Col>
        </Row>

         <Row className="align-items-center justify-content-center my-4">
          <Col md={3} className="text-center">
            <img
              src={YashImg}
              alt="Yash Image"
              className="rounded-circle founder-img shadow"
            />
          </Col>
          <Col md={8}>
            <h4 className="text-danger">Yash Mankumare</h4>
            <p className="text-muted info">
              <strong>Yash</strong> is a skilled full stack developer who loves building scalable web applications  
                  and crafting seamless backend APIs. His analytical mindset and design sense make his projects shine.
            </p>
          </Col>
        </Row>

        </Row>
        <Row className="justify-content-center ">
          <Col md={10}>
            <Card className="p-4 border-0 shadow-sm align-items-center philosophy-card">
              <FaSpa color="#ca4625" size={35} className="mb-3 " />
              <h4 className="text-danger">Our Philosophy</h4>
              <p className="text-muted ">
                "Yoga is not just a practice; it is a way of being. At The Yoga
                Center, we focus on holistic growth — aligning body, mind, and
                soul. Every breath, every pose, and every silence brings you one
                step closer to your true self."
              </p>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <div
          className="text-center mt-5"
        >
          <Button variant="danger" size="lg" className="rounded-pill px-4" href="/courses" >
            Join Our Classes
          </Button>
        </div>
      </Container>
    </div>
    
  );
}






