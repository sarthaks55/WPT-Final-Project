import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../services/TokenService";

export function Navigationbar() {

    const navigate = useNavigate();
    
        const handleLogout = ()=>{
            removeToken();
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

                        <LinkContainer to="/courses">
                            <Nav.Link>Courses List</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
                <Button variant="success" onClick={handleLogout}>Logout</Button>
            </Container>
        </Navbar>
    )
}