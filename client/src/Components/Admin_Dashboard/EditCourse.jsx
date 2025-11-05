import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { getCourseByID, updateCourse } from "../../services/CourseServices";

const EditCourse = () => {
const { id } = useParams();
    console.log("id from url", id);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ name: '', description: '', difficulty: '', duration_weeks: '', price:'' });
    
    const fetchCourseById = async () => {
        try {
            const response = await getCourseByID(id);
            console.log(response.data[0])
            if (response.status === 200) {
                setFormData(response.data[0])
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCourseById();
    }, []);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(formData);
            const response = await updateCourse(id, formData);
            console.log(response);
            if (response.status === 200) {
                // show success message
                navigate("/courses");
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
    <Container className="mt-4">
      <Row>
        <Col lg={8}>
          <Alert variant="info" className="fw-bold fs-5">
            Edit Course
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white">
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
                value={formData.description || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Difficulty</Form.Label>
              <Form.Select
                name="difficulty"
                value={formData.difficulty || "Beginner"}
                onChange={handleChange}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Duration (Weeks)</Form.Label>
              <Form.Control
                type="number"
                name="duration_weeks"
                value={formData.duration_weeks || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button type="submit" variant="success">
                ✅ Update Course
              </Button>
              <Button variant="secondary" onClick={() => navigate(-1)}>
                🔙 Back
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditCourse;
