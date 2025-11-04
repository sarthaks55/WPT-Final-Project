import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveUser } from "../services/UserService"; // ✅ you’ll create this service
import { Bounce, toast } from "react-toastify";

export function AddUser() {

    // initial form state matching the users table
    const [formData, setFormData] = useState({
        role_id: '',
        full_name: '',
        email: '',
        password_hash: '',
        phone: ''
    });

    // handle input change
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // handle form submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);

        try {
            const response = await saveUser(formData);
            console.log(response);

            if (response.status === 201) {
                toast.success("User Added Successfully 🎉", {
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

                // Reset form after success
                setFormData({
                    role_id: '',
                    full_name: '',
                    email: '',
                    password_hash: '',
                    phone: ''
                });
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong ❌", {
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
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col lg={8}>
                    <Alert variant="primary">Add New User</Alert>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Role ID</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter role ID"
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
                                placeholder="Enter full name"
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
                                placeholder="Enter email"
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
                                placeholder="Enter password"
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
                                placeholder="Enter phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add User
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
