import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { getUserById, updateUser } from "../../services/UserService";

const EditUser = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserById(id);
        setFormData(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();  
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, formData);
      toast.success("User updated successfully ✅", { transition: Bounce });
      navigate(-1);
    } catch (error) {
      toast.error("Failed to update user ❌", { transition: Bounce });
    }
  };

  if (!formData)
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );

  return (
    <Container className="mt-4">
      <Row>
        <Col lg={8}>
          <Alert variant="info">Edit User</Alert>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Role ID</Form.Label>
              <Form.Control
                type="number"
                name="role_id"
                value={formData.role_id}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password_hash"
                value={formData.password_hash}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="success">
              Update User
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditUser;

