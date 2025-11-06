import React, { useEffect, useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import { getAllInstructor, deleteInstructor } from "../../services/InstructorServices";

const InstructorList = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch instructor data
  const fetchDetails = async () => {
    try {
      const response = await getAllInstructor();
      console.log(response.data);
      setDetails(response.data);
    } catch (error) {
      console.error("Error fetching instructors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleAddInstructor = () => navigate("../instructors/add");

  const handleEdit = (id) => navigate(`../instructors/edit/${id}`);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this instructor?")) {
      try {
        await deleteInstructor(id);
        setDetails(details.filter((inst) => inst.id !== id));
      } catch (error) {
        console.error("Error deleting instructor:", error);
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
        <h3 className="fw-bold text-dark mb-0">Instructor List</h3>
        <Button
          variant="success"
          onClick={handleAddInstructor}
          className="d-flex align-items-center gap-2"
        >
          <FaUserPlus /> Add Instructor
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : details.length === 0 ? (
        <p className="text-center text-muted">No instructors found.</p>
      ) : (
        <div className="table-responsive">
          <Table bordered hover className="align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>User_id</th>
                <th>Bio</th>
                <th>Specialty</th>
                <th>Experience (Years)</th>
                <th>Certifications</th>
                <th>Available Days</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {details.map((inst, index) => (
                <tr key={index}>
                  <td>{inst.id}</td>
                  <td>{inst.user_id}</td>
                  <td>{inst.bio}</td>
                  <td>{inst.specialty}</td>
                  <td>{inst.experience_years}</td>
                  <td>{inst.certifications}</td>
                  <td>{inst.available_days}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                      <Button
                        variant="warning"
                        size="sm"
                        className="d-flex align-items-center gap-1"
                        onClick={() => handleEdit(inst.id)}
                      >
                        <FaEdit /> Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        className="d-flex align-items-center gap-1"
                        onClick={() => handleDelete(inst.id)}
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

export default InstructorList;
