import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { removeToken } from "../../services/TokenService";
import "../../assets/css/NavBar.css";
import lotusLogo from "../../assets/Images/lotus_logo_svg.svg";
import { getRoleID, getUsername, removeRoleID, removeUserID, removeUsername } from "../../services/RoleNameService";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { isLoggedIn } from "../../services/TokenService";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export function PublicNavBar() {
    const navigate = useNavigate();
    const role_id = getRoleID();
    const username = getUsername();
    const handleClick = async (event)=>{
        try {
            await navigate('/login');
        } catch (error) {
            console.log(error);
        } 
    }

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
                        
                        <LinkContainer to="/login">
                            <Nav.Link className="nav-link-custom d-lg-none">login</Nav.Link>
                        </LinkContainer>
                        
                    </Nav>
                </Navbar.Collapse>
                <FontAwesomeIcon icon={faUser} className="me-1" style={{ color: 'white' }} />
                {role_id === "3" ? (

                <DropdownButton className="no-style-dropdown d-none d-lg-block" title={username}>
                    <Dropdown.Item href="/userdashboard">User Dashboard</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>logout</Dropdown.Item>
                </DropdownButton>
                
                ) : role_id === "2" ? (

                <DropdownButton className="no-style-dropdown d-none d-lg-block" title={username}>
                    <Dropdown.Item href="/instructorDashboard">Instructor Dashboard</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>logout</Dropdown.Item>
                </DropdownButton>
                
                ) : role_id === "1" ? (

                
                <DropdownButton className="no-style-dropdown d-none d-lg-block" title={username}>
                    <Dropdown.Item href="/adminDashboard">Admin Dashboard</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>logout</Dropdown.Item>
                </DropdownButton>
                
                ) : (

                <Button className="Username-Button d-none d-lg-block"onClick={handleClick}>Login</Button>
                
                )}

            </Container>
        </Navbar>
    );
}

