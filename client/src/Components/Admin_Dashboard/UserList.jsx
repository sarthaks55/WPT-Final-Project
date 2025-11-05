import React, { useEffect, useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import { deleteUser, getAllUsers } from "../../services/UserService";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = () => navigate("../users/add");

  const handleEdit = (id) => navigate(`../users/edit/${id}`);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
        <h3 className="fw-bold text-dark mb-0">User List</h3>
        <Button
          variant="success"
          onClick={handleAddUser}
          className="d-flex align-items-center gap-2"
        >
          <FaUserPlus /> Add User
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : users.length === 0 ? (
        <p className="text-center text-muted">No users found.</p>
      ) : (
        <div className="table-responsive">
          <Table bordered hover className="align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Role ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.role_id}</td>
                  <td>{u.full_name}</td>
                  <td>{u.email}</td>
                  <td>{u.phone || "-"}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                      <Button
                        variant="warning"
                        size="sm"
                        className="d-flex align-items-center gap-1"
                        onClick={() => handleEdit(u.id)}
                      >
                        <FaEdit /> Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        className="d-flex align-items-center gap-1"
                        onClick={() => handleDelete(u.id)}
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

export default UserList; 
