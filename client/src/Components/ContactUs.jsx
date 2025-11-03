import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../assets/css/contact.css";
import lotusLogo from "../assets/Images/lotus_logo_svg.svg";
import contactBg from "../assets/Images/contact-us-bg.png"; 
import {ContactUs} from "../services/ContactServices"
import { Bounce, toast } from "react-toastify";

function ContactPage() {


  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: ''});

  const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(formData);
            const response = await ContactUs(formData);
            console.log(response);
            if (response.status === 200) {
                // show success message
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
            }
        } catch (error) {
            console.log(error);
            if (error.response.status === 500) {
                // show failure message
                toast.error("Something went wrong", {
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
            }
        }

    }

  return (


    <>

      <Container fluid className="contact-Header"
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      >
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col md={8}>
            <h1 className="fw-bold text-white">Contact Us</h1>
            <p className="lead text-white small">
              Our team is happy to answer any questions you have. Fill out the form below, and we'll be in touch as soon as possible.
            </p>
          </Col>
        </Row>
      </Container>


      <Container className="py-5 content-main">
        <Row className="justify-content-center align-items-start gx-5">
          <Col md={5} lg={4} className="mx-3">
            <Card className="shadow p-3 mb-5 contact-form">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                  <Form.Control type="text" placeholder="Full Name"  name="fullName" onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Control type="email" placeholder="Email Id" name="email" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Control type="tel" placeholder="Mobile Number" name="phone" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Control as="textarea" rows={4} placeholder="Tell us more..." name="message" onChange={handleChange} />
                </Form.Group>
                <Button variant="danger" className="w-100" type="submit" >
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          <Col md={6} lg={5} className="mt-4 mt-md-0 mx-3">
            <img src={lotusLogo} alt="Lotus Logo" className="lotus-logo mb-3" />

            <p className="fst-italic small text-muted mb-4 centerDesc">
              Established in 2025 by Shri Sarthakji, The Yoga Center is the
              CDAC’s oldest faculty recognised Yoga Centre. The founder’s vision
              and mission was to make Yoga accessible to everyone.
            </p>

            <h5 className="text-danger text-center mb-3">Contact Information</h5>

            <p className="contact-line"><FaEnvelope color="#ca4625" /> <span>info@theyogacenter.org</span></p>
            <p className="contact-line"><FaPhoneAlt color="#ca4625" /> <span>+91-7796700615, +91-22-222222222</span></p>
            <p className="contact-line"><FaMapMarkerAlt color="#ca4625" /> <span>Santacruz East, Mumbai, 400055</span></p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactPage;
