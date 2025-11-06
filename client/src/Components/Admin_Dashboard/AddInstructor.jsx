import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { addInstructor } from "../../services/InstructorServices";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddInstructor() {
  const [formData, setFormData] = useState({
    user_id:"",
    bio: "",
    specialty: "",
    experience_years: "",
    certifications: "",
    available_days: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addInstructor(formData);
      if (response.status === 201 || response.status === 200) {
        toast.success("Instructor Added Successfully 🎉", { transition: Bounce });
        setFormData({
          bio: "",
          specialty: "",
          experience_years: "",
          certifications: "",
          rating: "",
          available_days: "",
        });
        navigate(-1); // redirect to instructor list
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
            Add New Instructor
          </Alert>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col lg={6}>
          <Form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-white">

            <Form.Group className="mb-3" controlId="user_id">
              <Form.Label>User_id</Form.Label>
              <Form.Control
                type="int"
                name="user_id"
                placeholder="Enter user_id"
                value={formData.user_id}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Bio */}
            <Form.Group className="mb-3" controlId="bio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                name="bio"
                placeholder="Enter instructor bio"
                value={formData.bio}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Specialty */}
            <Form.Group className="mb-3" controlId="specialty">
              <Form.Label>Specialty</Form.Label>
              <Form.Control
                type="text"
                name="specialty"
                placeholder="Enter instructor specialty"
                value={formData.specialty}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Experience */}
            <Form.Group className="mb-3" controlId="experience_years">
              <Form.Label>Experience (Years)</Form.Label>
              <Form.Control
                type="number"
                name="experience_years"
                placeholder="Enter experience in years"
                value={formData.experience_years}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Certifications */}
            <Form.Group className="mb-3" controlId="certifications">
              <Form.Label>Certifications</Form.Label>
              <Form.Control
                type="text"
                name="certifications"
                placeholder="Enter certifications"
                value={formData.certifications}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Available Days */}
            <Form.Group className="mb-3" controlId="available_days">
              <Form.Label>Available Days</Form.Label>
              <Form.Control
                type="text"
                name="available_days"
                placeholder="Enter available days (e.g., Mon-Fri)"
                value={formData.available_days}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <Button variant="primary" type="submit">
                Add Instructor
              </Button>
            </div>

          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddInstructor;
