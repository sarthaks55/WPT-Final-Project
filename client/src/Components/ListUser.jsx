import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { deleteUser, getAllUsers } from "../services/UserService"; // Update paths as needed
import '../assets/css/userlist.css';
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function ListUser() {

    const [users, setUsers] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers();
            console.log(response.data);
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const hideConfirmation = () => {
        setShowConfirmation(false);
    }

    const showSuccessToast = () => {
        toast.success("User deleted successfully", {
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

    const showErrorToast = () => {
        toast.error("User deletion failed", {
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

    const handleUserDelete = async () => {
        try {
            if (selectedUser) {
                const response = await deleteUser(selectedUser.id);
                if (response.status === 200) {
                    showSuccessToast();
                    const remainingUsers = users.filter((u) => u.id !== selectedUser.id);
                    setUsers(remainingUsers);
                }
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 500) {
                showErrorToast();
            }
        } finally {
            setShowConfirmation(false);
        }
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col lg={8}>
                    <Alert variant="primary">User List</Alert>
                </Col>
            </Row>
            {
                users.length === 0 ? (
                    <Alert variant="warning">No users found</Alert>
                ) : (
                    <Table className="mt-3">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.full_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.role_id}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            className="action-button"
                                            onClick={() => {
                                                setShowConfirmation(true);
                                                setSelectedUser(user);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            className="action-button"
                                            onClick={() => {
                                                navigate(`/edit-user/${user.id}`);
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )
            }

            <Modal show={showConfirmation} onHide={hideConfirmation}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {selectedUser ? selectedUser.full_name : ''}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={hideConfirmation}>
                        No
                    </Button>
                    <Button variant="success" onClick={handleUserDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
