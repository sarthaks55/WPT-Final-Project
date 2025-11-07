import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveCourse } from "../services/CourseServices";
import { Bounce, toast } from "react-toastify";

export function AddCourses() {

    const [formData, setFormData] = useState({ name: '', description: '', difficulty: '', duration_weeks: '', price:'' });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(formData);
            const response = await saveCourse(formData);
            console.log(response);
            if (response.status === 200) {
                // show success message
                toast.success("Course Added", {
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
        <Container className="mt-4">

            <Row>
                <Col lg={8}>
                    <h3>Add a course</h3>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Course Description" name="description" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Difficulty</Form.Label>
                            <Form.Control type="text" placeholder="Enter Difficulty" name="difficulty" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Duration_weeks</Form.Label>
                            <Form.Control type="number" placeholder="Enter Duration" name="duration_weeks" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Enter price" name="price" onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add Course
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}