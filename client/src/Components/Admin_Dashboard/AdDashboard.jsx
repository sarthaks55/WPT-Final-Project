import React from "react";
import { Card, Row, Col, Table, Badge } from "react-bootstrap";
import { getAllUsersCount } from "../../services/UserService";
import { getAllInstructorsCount } from "../../services/InstructorServices";
import { getAllCoursesCount } from "../../services/CourseServices";
import { useEffect } from "react";
import { useState } from "react";

const AdDashboard = () => {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalInstructors, setTotalInstructors] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
 
  const fetchTotalCount = async () => {
    try {   
      const users = await getAllUsersCount();
      const instructors = await getAllInstructorsCount();
      const courses = await getAllCoursesCount();

      setTotalUsers(users);
      setTotalInstructors(instructors);
      setTotalCourses(courses);
    } catch (error) {
      console.error("Error fetching :", error);
    } 
  };
  
  useEffect(() => {
    fetchTotalCount();
  
  }, [])
  

  return (
    <div className="p-4">
      <h3 className="mb-4">Dashboard</h3>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="p-3 text-center shadow-sm">
            <h4>{totalUsers}</h4>
            <p>Users</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 text-center shadow-sm">
            <h4>{totalCourses}</h4>
            <p>Courses</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 text-center shadow-sm">
            <h4>{totalInstructors}</h4>
            <p>instructors</p>
          </Card>
        </Col>
      </Row>

      
    </div>
  );
};

export default AdDashboard;
   