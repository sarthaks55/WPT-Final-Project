import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { getUserById, updateUser } from "../services/UserService"; // adjust the import path
import { Bounce, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export function UpdateUserForm() {

    const { id } = useParams();
    console.log("User ID from URL:", id);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        role_id: '',
        full_name: '',
        email: '',
        password_hash: '',
        phone: ''
    });

    const fetchUserById = async () => {
        try {
            const response = await getUserById(id);
            if (response.status === 200) {
                setFormData(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserById();
    }, []);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(formData);
            const response = await updateUser(id, formData);
            if (response.status === 200) {
                toast.success("User updated successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                    transition: Bounce,
                });
                navigate("/users-list");
            }
        } catch (error) {
            console.log(error);
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
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col lg={8}>
                    <Alert variant="primary">Update User</Alert>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter full name"
                                name="full_name"
                                onChange={handleChange}
                                value={formData.full_name}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password_hash"
                                onChange={handleChange}
                                value={formData.password_hash}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter phone number"
                                name="phone"
                                onChange={handleChange}
                                value={formData.phone}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Role ID</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter role ID"
                                name="role_id"
                                onChange={handleChange}
                                value={formData.role_id}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Update User
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
