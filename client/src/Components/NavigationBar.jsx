import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


export function Navigationbar() {
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

                        <LinkContainer to="/contactus">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}