import React, { useEffect, useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import { deleteCourse, getAllCourses } from "../../services/CourseServices";

const CoursesLists = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {   
      const res = await getAllCourses();
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCourse = () => navigate("../courses/add");

  const handleEdit = (id) => navigate(`../courses/edit/${id}`);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteCourse(id);
        setCourses(courses.filter((c) => c.id !== id));
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
        <h3 className="fw-bold text-dark mb-0">Courses List</h3>
        <Button
          variant="success"
          onClick={handleAddCourse}
          className="d-flex align-items-center gap-2"
        >
          <FaPlusCircle /> Add Course
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : courses.length === 0 ? (
        <p className="text-center text-muted">No courses found.</p>
      ) : (
        <div className="table-responsive">
          <Table bordered hover className="align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Difficulty</th>
                <th>Duration (Weeks)</th>
                <th>Price (₹)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.difficulty}</td>
                  <td>{c.duration_weeks}</td>
                  <td>{c.price}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEdit(c.id)}
                        className="d-flex align-items-center gap-1"
                      >
                        <FaEdit /> Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(c.id)}
                        className="d-flex align-items-center gap-1"
                      >
                        <FaTrashAlt /> Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default CoursesLists;
