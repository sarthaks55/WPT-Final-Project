import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { register } from "../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

export function Register() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password_hash: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await register(formData);
      console.log(response);

      if (response.status === 200 || response.status === 201) {
        toast.success("Registration successful! Please login.", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message || "Registration failed.", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col lg={6}>
          <h3>Register</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="full_name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password_hash"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phone"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
            <Link to="/">
                <span>login</span>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
