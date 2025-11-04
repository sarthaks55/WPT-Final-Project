import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../services/TokenService";
import "../assets/css/NavBar.css";
import lotusLogo from "../assets/Images/lotus_logo_svg.svg";

export function Navigationbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate("/");
    }
    return (
        <Navbar expand="lg" className="app-navbar" bg="dark" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand className="nav-brand" href="/">
                    <img src={lotusLogo} alt="Lotus Logo" className="lotus-logo " />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-links">
                        <LinkContainer to="/">
                            <Nav.Link className="nav-link-custom">Dashboard</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/userdashboard">
                            <Nav.Link className="nav-link-custom">User Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/instructorDashboard">
                            <Nav.Link className="nav-link-custom">Instructor Dashboard</Nav.Link>
                        </LinkContainer>

                    
                    </Nav>
                </Navbar.Collapse>

                 <Button className="Button-color" onClick={handleLogout}>Logout</Button>
            </Container>
        </Navbar>
    );
}

