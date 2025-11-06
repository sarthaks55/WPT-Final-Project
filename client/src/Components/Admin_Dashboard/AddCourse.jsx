import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { saveCourse } from "../../services/CourseServices";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    difficulty: "Beginner",
    duration_weeks: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };   

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveCourse(formData);
      toast.success("Course Added Successfully", { transition: Bounce });
      navigate("/courses");
    } catch (error) {
      toast.error("Failed to Add Course", { transition: Bounce });
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col lg={8}>
          <Alert variant="primary">Add New Course</Alert>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Difficulty</Form.Label>
              <Form.Select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Duration (Weeks)</Form.Label>
              <Form.Control
                type="number"
                name="duration_weeks"
                value={formData.duration_weeks}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" variant="success">
              Add Course
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCourse;
