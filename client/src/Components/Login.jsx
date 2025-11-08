import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { getToken, storeToken } from "../services/TokenService";
import { getRoleID, getUsername, storeRoleID, storeUserID, storeUsername } from "../services/RoleNameService";
import "../assets/css/login.css"

export function Login() {

    const [formData, setFormData] = useState({email:'', password_hash:''});

    const navigate = useNavigate();

    useEffect(()=>{
        const token = getToken();
        const role_id = getRoleID();
        const username = getUsername();
        if(token){
            navigate("/");
        }
    },[]);

    const handleChange = (event)=>{
        setFormData({...formData, [event.target.name]:event.target.value});
    }

    const handleSubmit = async (event)=>{
        try {
            event.preventDefault();
            console.log(formData);
            const response = await login(formData);
            console.log(response);
            if(response.status === 200){
                storeToken(response.data.token);
                storeRoleID(response.data.role_id);
                storeUsername(response.data.name);
                
                console.log(response.data.name);
                storeUserID(response.data.user_id);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            if(error.response){
                if(error.response.status === 400 || error.response.status === 500 ){
                    toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                })
                }
            }
        }
        
    }

return (
    <div className="loginPage">   
  <div className="login-page-container">
    <div className="login-card">
      <div className="login-left-panel">
        <div className="left-content">
            <h1 className="fw-bold">Welcome</h1>
            <p className="mt-2">Discover Balance,Strength & Peace</p>

            <Button
                variant="outline-light"
                className="mt-3 px-4 py-2"
                as={Link}
                to="/register"
            >
                REGISTER
                </Button>
        </div>
        
      </div>

      <div className="login-right-panel">
        <h2 className="fw-bold text-center mb-4 login-title">Sign In</h2>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label style={{ color: 'white'}}>Email</Form.Label>
            <Form.Control 
              style={{ color: 'white', backgroundColor: '#262728' }}  
              type="text"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ color: 'white'}}>Password</Form.Label>
            <Form.Control
              style={{ color: 'white', backgroundColor: '#262728' }}  
              type="password"
              placeholder="Enter your password"
              name="password_hash"
              onChange={handleChange}
            />
          </Form.Group>

          
          <div className="d-flex justify-content-center">
            <Button type="submit" className="login-btn px-5 py-2">
              LOGIN
            </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
  </div>
)

}