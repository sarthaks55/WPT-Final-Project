import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../services/TokenService";
import "../assets/css/NavBar.css";
import lotusLogo from "../assets/Images/lotus_logo_svg.svg";
import { getUsername, removeRoleID, removeUserID, removeUsername } from "../services/RoleNameService";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { isLoggedIn } from "../services/TokenService";
import { InstructorNavBar } from "./Navigation bars/InstructorNavBar";
import { UserNavBar } from "./Navigation bars/UserNavBar";
import { AdminNavBar } from "./Navigation bars/AdminNavbar";
import { PublicNavBar } from "./Navigation bars/PublicNavBar";


export function Navigationbar() {

    const navigate = useNavigate();
    const username = getUsername();

    const Role_id = localStorage.getItem("role_id");
    const islogIn = isLoggedIn();

    if(!Role_id){
        return <PublicNavBar/>
    }
    else if(Role_id === "1"){
        return <AdminNavBar/>
    }
    else if(Role_id === "2"){
        return <InstructorNavBar/>
    }
    else if(Role_id === "3"){
        return <UserNavBar/>
    }
    
}

