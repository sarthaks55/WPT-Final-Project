import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveUser } from "../services/UserService";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [formData, setFormData] = useState({
    role_id: "",
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
      const response = await saveUser(formData);
      if (response.status === 201) {
        toast.success("User Added Successfully 🎉", { transition: Bounce });
        setFormData({
          role_id: "",
          full_name: "",
          email: "",
          password_hash: "",
          phone: "",
        });
        navigate("/users"); // redirect back to user list after success
      }
    } catch (error) {
      toast.error("Something went wrong ❌", { transition: Bounce });
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col lg={8}>
          <Alert variant="primary" className="fw-semibold fs-5">
            Add New User
          </Alert>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col lg={6}>
          <Form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-white">
            
            {/* Role ID */}
            <Form.Group className="mb-3" controlId="role_id">
              <Form.Label>Role ID</Form.Label>
              <Form.Control
                type="number"
                name="role_id"
                placeholder="Enter role ID (e.g. 1 for Admin, 2 for User)"
                value={formData.role_id}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Full Name */}
            <Form.Group className="mb-3" controlId="full_name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="full_name"
                placeholder="Enter full name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="password_hash">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password_hash"
                placeholder="Enter password"
                value={formData.password_hash}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Phone */}
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <Button variant="secondary" onClick={() => navigate("/users")}>
                Back
              </Button>
              <Button variant="primary" type="submit">
                Add User
              </Button>
            </div>

          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddUser;
