import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../services/TokenService";
import "../assets/css/NavBar.css";
import lotusLogo from "../assets/Images/lotus_logo_svg.svg";
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
                         <LinkContainer to="/add-courses">
                            <Nav.Link  className="nav-link-custom">Add Courses</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/courses-list">
                            <Nav.Link  className="nav-link-custom">Courses List</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contactus">
                            <Nav.Link  className="nav-link-custom">Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/userdashboard">
                            <Nav.Link className="nav-link-custom">User Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/instructorDashboard">
                            <Nav.Link className="nav-link-custom">Instructor Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/adminDashboard">
                            <Nav.Link className="nav-link-custom">Admin Dashboard</Nav.Link>
                        </LinkContainer>
                         <LinkContainer to="/courses">
                    <Nav.Link className="nav-link-custom">{username}</Nav.Link>
                </LinkContainer>

                    
                    </Nav>
                </Navbar.Collapse>

                 <Button className="Button-color" onClick={handleLogout}>Logout</Button>
            </Container>
        </Navbar>
    );
}

