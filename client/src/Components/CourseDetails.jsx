import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { enrollInCourse, getCourseByID, getCourseScheduleByID } from "../services/CourseServices";
import { getRoleID, getUserID } from "../services/RoleNameService";
import { Bounce, toast } from "react-toastify";
import { FaBook, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaMoneyBillWave, FaUserGraduate } from "react-icons/fa";
import "../assets/css/coursedetails.css";

export function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [courseschedule, setCourseschedule] = useState(null);
  const user_id = getUserID();
  const role_id = getRoleID();

  const   fetchCourse = async() => {
    try {
        const res = await getCourseByID(id);
        const res1 = await getCourseScheduleByID(id);
        setCourse(res.data[0]);
        setCourseschedule(res1.data);
      } catch (err) {
        console.error("Error fetching course:", err);
      } 
  }

  const formData = {
    "user_id":user_id,
    "course_id":id
  }

  const handleSubmit = async (event) => {
   
    if (role_id != 3) {
        toast.warning("Please login as User ", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        return; 
    }
        try {
            const response = await enrollInCourse(formData);
            if (response.status === 200) {
                toast.success("Enrolled Successfully 🎉", {
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

  useEffect(() => {
    
    fetchCourse();
  }, []);


  if (!course) {
    return (
      <Container className="mt-4 text-center">
        <p>Course not found.</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="shadow-lg p-4 course-details-card">
        <Card.Body>
          <h2 className="fw-bold text-primary text-center mb-3">
            <FaBook className="me-2" /> {course.name}
          </h2>
          <p className="text-muted text-center mb-4">{course.description}</p>

          <Row className="gy-3">
            <Col sm={12}>
              <strong><FaUserGraduate className="me-2" /> Instructor:</strong> {courseschedule?.instructor_name}
            </Col>
            <Col sm={6}>
              <strong> Difficulty:</strong> {course.difficulty}
            </Col>
            <Col sm={6}>
              <strong><FaClock className="me-2" /> Duration:</strong> {course.duration_weeks} weeks
            </Col>
            <Col sm={6}>
              <strong><FaMoneyBillWave className="me-2" /> Price:</strong> ₹{course.price}
            </Col>
            <Col sm={6}>
              <strong><FaCalendarAlt className="me-2" /> Start:</strong> {courseschedule?.start_datetime}
            </Col>
            <Col sm={6}>
              <strong><FaCalendarAlt className="me-2" /> End:</strong> {courseschedule?.end_datetime}
            </Col>
            <Col sm={6}>
              <strong><FaMapMarkerAlt className="me-2" /> Location:</strong> {courseschedule?.location}
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button variant="success" className="px-4 py-2" onClick={handleSubmit}>
              Enroll Now 
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
