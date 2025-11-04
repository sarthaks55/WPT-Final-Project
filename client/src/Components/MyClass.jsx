import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { getCourseByUserId } from "../services/CourseServices";
import '../assets/css/productlist.css';
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function CoursesList() {

    const [courses, setCourses] = useState([]);
   

    const navigate = useNavigate();

    const fetchCourses = async () => {
        try {
            const response = await getCourseByUserId();
            console.log(response.data);
            setCourses(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCourses();
    }, []);

    


    

   

    return (
        <Container className="mt-3">
            <Row>
                <Col lg={8}>
                    <Alert variant="primary">Your Course List</Alert>
                </Col>
            </Row>
            {
                courses.length === 0 ? <Alert variant="warning">No Courses found</Alert> : <Table className="mt-3">
                    <thead>
                        <tr >
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Difficulty</th>
                            <th>Duration_weeks</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{course.id}</td>
                                        <td>{course.name}</td>
                                        <td>{course.description}</td>
                                        <td>{course.difficulty}</td>
                                        <td>{course.duration_weeks}</td>
                                        <td>{course.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            }
            
        </Container>
    )
}