import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { getInstructorById, updateInstructor } from "../../services/InstructorServices";

const EditInstructor = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  // Fetch instructor by ID when component mounts
  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const res = await getInstructorById(id);
        setFormData(res.data);
      } catch (error) {
        console.error("Error fetching instructor:", error);
      }
    };
    fetchInstructor();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateInstructor(id, formData);
      toast.success("Instructor updated successfully ✅", { transition: Bounce });
      navigate(-1); // go back to previous page (Instructor list)
    } catch (error) {
      toast.error("Failed to update instructor ❌", { transition: Bounce });
    }
  };

  // Show loader until data is fetched
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
          <Alert variant="info">Edit Instructor</Alert>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-white">

            <Form.Group className="mb-3">
              <Form.Label>User_id</Form.Label>
              <Form.Control
                type="int"
                name="user_id"
                value={formData.user_id}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Specialty</Form.Label>
              <Form.Control
                type="text"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Experience (Years)</Form.Label>
              <Form.Control
                type="number"
                name="experience_years"
                value={formData.experience_years}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Certifications</Form.Label>
              <Form.Control
                type="text"
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Available Days</Form.Label>
              <Form.Control
                type="text"
                name="available_days"
                value={formData.available_days}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-flex justify-content-between mt-4">
              <Button type="submit" variant="success">
                Update Instructor
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditInstructor;
