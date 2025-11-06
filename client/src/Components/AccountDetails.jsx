
import { Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getUserById} from "../services/UserService";

export default function AccountDetails() {
     
    const [Account, setAccount] = useState({ full_name: '', email: '', phone: '', password_hash: '' });
 


    const navigate = useNavigate();

    const ID = localStorage.getItem("user_id");
    if (!ID) return;
    
    
   

    const fetchDetails = async () => {
        try {
            const response = await getUserById(ID);
            console.log(response.data);
            setAccount(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDetails();
    }, []);
    const handleClick =  ()=>{
         navigate(`editDetails/${ID}`);
    }


    return (
        <div>
            <h2 className="mb-4">Personal Information</h2>
            <Form>
                <Row>
                    <Col sm={12} md={8}>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control placeholder="Full Name" disabled value={Account.full_name}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="E-mail" disabled value={Account.email}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control placeholder="Phone" disabled value={Account.phone} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="Phone" disabled value={Account.password_hash}  type="password"/>
                        </Form.Group>
                        <div className="d-flex gap-2">
                            <Button variant="danger" onClick={handleClick}
                            >Edit</Button>
                        </div>
                    </Col>
                </Row>
            </Form>



        </div>
    );
}
