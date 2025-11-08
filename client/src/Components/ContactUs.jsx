import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../assets/css/contact.css";
import lotusLogo from "../assets/Images/lotus_logo_svg.svg";
import contactBg from "../assets/Images/contact-us-bg.png";
import { ContactUs } from "../services/ContactServices";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const initialState = { name: "", email: "", phone: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const nameRegex = /^[A-Za-z ]{2,50}$/; 
    const phoneRegex = /^[0-9]{10}$/; 
    const messageMinLength = 10;

    if (!formData.name || !nameRegex.test(formData.name)) {
      toast.error("Enter a valid name (letters and spaces only, 2–50 chars).", {
        transition: Bounce,
      });
      return;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Enter a valid email address.", { transition: Bounce });
      return;
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      toast.error("Enter a valid 10-digit phone number.", { transition: Bounce });
      return;
    }

    if (!formData.message || formData.message.trim().length < messageMinLength) {
      toast.error(`Message should be at least ${messageMinLength} characters.`, {
        transition: Bounce,
      });
      return;
    }

    try {
      const response = await ContactUs(formData);
      if (response?.status === 200) {
        toast.success("Message sent", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        setFormData(initialState);
        // navigate("/thank-you") // optional: navigate after success
      } else {
        toast.error("Failed to send message.", { transition: Bounce });
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 500) {
        toast.error("Something went wrong", { transition: Bounce });
      } else {
        toast.error("Failed to send message", { transition: Bounce });
      }
    }
  };

  return (
    <>
      <Container
        fluid
        className="contact-Header"
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      >
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col md={8}>
            <h1 className="fw-bold text-white">Contact Us</h1>
            <p className="lead text-white small">
              Our team is happy to answer any questions you have. Fill out the
              form below, and we'll be in touch as soon as possible.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="py-5 content-main">
        <Row className="justify-content-center align-items-start gx-5">
          <Col md={5} lg={4} className="mx-3">
            <Card className="shadow p-3 mb-5 contact-form">
              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email Id"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="tel"
                    placeholder="Mobile Number"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us more..."
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    required
                  />
                </Form.Group>

                <Button variant="danger" className="w-100" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          <Col md={6} lg={5} className="mt-4 mt-md-0 mx-3">
            <img src={lotusLogo} alt="Lotus Logo" className="lotus-logo mb-3" />

            <p className="fst-italic small text-muted mb-4 centerDesc">
              Established in 2025 by Shri Sarthakji, The Yoga Center is the CDAC’s
              oldest faculty recognised Yoga Centre. The founder’s vision and
              mission was to make Yoga accessible to everyone.
            </p>

            <h5 className="text-danger text-center mb-3">Contact Information</h5>

            <p className="contact-line">
              <FaEnvelope color="#ca4625" /> <span>info@theyogacenter.org</span>
            </p>
            <p className="contact-line">
              <FaPhoneAlt color="#ca4625" /> <span>+91-7796700615, +91-22-222222222</span>
            </p>
            <p className="contact-line">
              <FaMapMarkerAlt color="#ca4625" />{" "}
              <span>Santacruz East, Mumbai, 400055</span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactPage;
