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


export function PublicNavBar() {
    const navigate = useNavigate();

    const handleClick = async (event)=>{
        try {
            await navigate('/login');
        } catch (error) {
            console.log(error);
        } 
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

                <Button className="Username-Button d-none d-lg-block"onClick={handleClick}>Login</Button>
                    
                

            </Container>
        </Navbar>
    );
}

