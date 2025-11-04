import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../services/TokenService";
import { getUsername, removeRoleID, removeUserID, removeUsername } from "../services/RoleNameService";


export function Navigationbar() {

    const navigate = useNavigate();
    const username = getUsername();
    
        const handleLogout = ()=>{
            removeToken();
            removeRoleID();
            removeUsername();
            removeUserID();
            navigate("/");
        }

    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Yoga Center App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/add-courses">
                            <Nav.Link>Add Courses</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/courses-list">
                            <Nav.Link>Courses List</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contactus">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/aboutus">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/userdashboard">
                            <Nav.Link>UserDashboard</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/add-user">
                            <Nav.Link>Add User</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/user-list">
                            <Nav.Link>User List</Nav.Link>
                        </LinkContainer>

                        

                    </Nav>
                </Navbar.Collapse>
                <LinkContainer to="/courses">
                    <Nav.Link>{username}</Nav.Link>
                </LinkContainer>
                    
                <Button variant="success" onClick={handleLogout}>Logout</Button>
            </Container>
        </Navbar>
    )
}