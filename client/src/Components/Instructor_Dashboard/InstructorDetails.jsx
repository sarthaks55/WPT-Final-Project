
import { Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getInstructorById } from "../../services/InstructorServices";

export default function InstructorDetails() {
     
    const [Detail, setDetail] = useState({ bio:'', specialty:'', experience_years:'', certifications:'', rating:'', available_days:'', session_duration:'', languages:''});
 


    const navigate = useNavigate();

    const ID = localStorage.getItem("user_id");
    if (!ID) return;
    console.log(ID);
    
   

    const fetchDetails = async () => {
        try {
            const response = await getInstructorById(ID);
            console.log(response.data);
            setDetail(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDetails();
    }, []);



    return (
        <div>
            <h2 className="mb-4">Personal Information</h2>
            <Form>
                <Row>
                    <Col sm={12} md={8}>
                        <Form.Group className="mb-3">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control placeholder="Bio" disabled value={Detail.bio}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>specialty</Form.Label>
                            <Form.Control  placeholder="specialty" disabled value={Detail.specialty}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>experience_years</Form.Label>
                            <Form.Control placeholder="experience_years" disabled value={Detail.experience_years} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>certifications</Form.Label>
                            <Form.Control placeholder="certifications" disabled value={Detail.certifications}  />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>rating</Form.Label>
                            <Form.Control placeholder="rating" disabled value={Detail.rating}  />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>available_days</Form.Label>
                            <Form.Control placeholder="available_days" disabled value={Detail.available_days}  />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>session_duration</Form.Label>
                            <Form.Control placeholder="session_duration" disabled value={Detail.session_duration}  />
                        </Form.Group>
                        

                        <div className="d-flex gap-2">
                            <Button variant="danger" onClick={() => {
                                navigate(`../editInstructorDetails/${ID}`);
                            }}>Edit</Button>
                        </div>
                    </Col>
                </Row>
            </Form>



        </div>
    );
}
