import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button, Spinner } from "react-bootstrap";
import { enrollInCourse, getCourseByID, getCourseScheduleByID } from "../services/CourseServices";
import { getUserID } from "../services/RoleNameService";
import { Bounce, toast } from "react-toastify";


export function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [courseschedule, setCourseschedule] = useState(null);
  const user_id = getUserID();

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
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Card.Text>
            <strong>Instructor: {courseschedule.instructor_name}</strong> 
          </Card.Text>
          <Card.Text>
            <strong>Description: {course.description}</strong> 
          </Card.Text>
          <Card.Text>
            <strong>Difficulty:</strong> {course.difficulty}
          </Card.Text>
          <Card.Text>
            <strong>Duration:</strong> {course.duration_weeks}
          </Card.Text>
          <Card.Text>
            <strong>Price:</strong> ${course.price}
          </Card.Text>
          <Card.Text>
            <strong>Start Date:</strong> {courseschedule.start_datetime}
          </Card.Text>
          <Card.Text>
            <strong>End Date:</strong> {courseschedule.end_datetime}
          </Card.Text>
          <Card.Text>
            <strong>Location:</strong> {courseschedule.location}
          </Card.Text>

          <Button variant="primary" onClick={handleSubmit}>
            Enroll
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
