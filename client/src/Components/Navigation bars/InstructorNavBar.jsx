import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { removeToken } from "../../services/TokenService";
import "../../assets/css/NavBar.css";
import lotusLogo from "../../assets/Images/lotus_logo_svg.svg";
import { getUsername, removeRoleID, removeUserID, removeUsername } from "../../services/RoleNameService";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { isLoggedIn } from "../../services/TokenService";
import { useNavigate } from "react-router-dom";


export function InstructorNavBar() {
    const navigate = useNavigate();
    const username = getUsername();


    const handleLogout = async () => {
        removeToken();
        removeRoleID();
        removeUsername();
        removeUserID();
        await navigate("/");
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
                            <Nav.Link className="nav-link-custom">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/courses">
                            <Nav.Link className="nav-link-custom">Courses</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contactus">
                            <Nav.Link className="nav-link-custom">Contact Us</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/aboutus">
                            <Nav.Link className="nav-link-custom">About Us</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/instructorDashboard">
                            <Nav.Link className="nav-link-custom d-lg-none">Instructor Dashboard</Nav.Link>
                        </LinkContainer>

                        
                            <Nav.Link className="nav-link-custom d-lg-none">About Us</Nav.Link>
                        
                        
                    </Nav>

                    <DropdownButton className="no-style-dropdown d-none d-lg-block" title={username}>
                    <Dropdown.Item href="/instructorDashboard">Instructor Dashboard</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>logout</Dropdown.Item>
                    </DropdownButton>
                </Navbar.Collapse>

                
                    
                

            </Container>
        </Navbar>
    );
}

