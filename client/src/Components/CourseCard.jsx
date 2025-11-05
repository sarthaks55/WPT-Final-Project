import { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
// import { EnrollButton } from "./EnrollButton";
import { useNavigate } from "react-router-dom";
import { getAllCourses } from "../services/CourseServices";

export function CourseList() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();


  const fetchCourses = async() => {
      const res = await getAllCourses();
      setCourses(res.data);
    }


  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {courses.map((course) => (
          <Col lg={4} key={course.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                {/* <EnrollButton courseId={course.id} userId={userId} /> */}
                <Button
                  variant="success"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  Explore More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
