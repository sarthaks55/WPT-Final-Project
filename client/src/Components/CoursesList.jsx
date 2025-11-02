import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { deleteProduct, getAllProducts } from "../services/CourseServices";
import '../assets/css/productlist.css';
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function CoursesList() {

    const [courses, setCourses] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const navigate = useNavigate();

    const fetchCourses = async () => {
        try {
            const response = await getAllCourses();
            console.log(response.data);
            setCourses(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCourses();
    }, []);

    const hideConfirmation = () => {
        setShowConfirmation(false);
    }


    const showSuccessToast = () => {
        toast.success("Product deleted", {
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

    const showErrorToast = () => {
        toast.error("Product deletion failed", {
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

    const handleCourseDelete = async () => {
        try {
            if (selectedCourse) {
                const response = await deleteProduct(selectedCourse.id);
                if (response.status === 200) {
                    showSuccessToast();
                    const remainingProducts = courses.filter((p) => {
                        return p.id !== selectedCourse.id
                    });
                    setCourses(remainingCourses);
                }
            }
        } catch (error) {
            console.log(error);
            if (error.response.status === 500) {
                showErrorToast();
            }
        }
        finally {
            setShowConfirmation(false);
        }
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col lg={8}>
                    <Alert variant="primary">Course List</Alert>
                </Col>
            </Row>
            {
                courses.length === 0 ? <Alert variant="warning">No Courses found</Alert> : <Table className="mt-3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description (₹)</th>
                            <th>Difficulty</th>
                            <th>Duration_weeks</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((courses, index) => {
                                return (
                                    <tr>
                                        <td>{courses.id}</td>
                                        <td>{courses.name}</td>
                                        <td>{courses.description}</td>
                                        <td>{courses.difficulty}</td>
                                        <td>{courses.duration_weeks}</td>
                                        <td>{courses.price}</td>
                                        <td>
                                            <Button variant="danger" size="sm" className="action-button" onClick={() => {
                                                setShowConfirmation(true);
                                                setSelectedCourse(course);
                                            }}>Delete</Button>
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                className="action-button"
                                                onClick={() => {
                                                   
                                                }}>Edit</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            }
            <Modal show={showConfirmation} onHide={hideConfirmation}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure, you want to delete the {selectedCourse ? selectedCourse.name : ''} ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={hideConfirmation}>
                        No
                    </Button>
                    <Button variant="success" onClick={handleCourseDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}