import { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
// import { EnrollButton } from "./EnrollButton";
import { useNavigate } from "react-router-dom";
import { getAllCourses } from "../services/CourseServices";
import { FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import "../assets/css/courselist.css";

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
          <Col lg={4} md={6} sm={12} key={course.id} className="mb-4">
            <Card className="course-card shadow-sm border-1">
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <FaBookOpen size={24} className="me-2 text-primary icon" />
                  <Card.Title className="mb-0 fw-bold">
                    {course.name}
                  </Card.Title>
                </div>

                <Card.Text className="text-muted mb-2">
                  {course.description}
                </Card.Text>

                <div className="mt-3 d-flex justify-content-between align-items-center">
                  <span className="text-success fw-semibold small">
                    <FaChalkboardTeacher className="me-1" />
                    By Instructor
                  </span>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => navigate(`/courses/${course.id}`)}
                  >
                    Explore More →
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
