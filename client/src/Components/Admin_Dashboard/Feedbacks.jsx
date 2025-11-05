import React, { useEffect, useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import { getContactUs } from "../../services/ContactServices";


const Feedbacks = () => {
  const [contactus, setContactus] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const fetchContactUs = async () => {
    try {   
      const res = await getContactUs();
      setContactus(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactUs();
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
        <h3 className="fw-bold text-dark mb-0">FeedBack List</h3>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : contactus.length === 0 ? (
        <p className="text-center text-muted">No Feedback found.</p>
      ) : (
        <div className="table-responsive">
          <Table bordered hover className="align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Submitted_at</th>
              </tr>
            </thead>
            <tbody>
              {contactus.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.message}</td>
                  <td>{c.submitted_at}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Feedbacks;
   


  
  

