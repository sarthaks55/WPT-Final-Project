
import { Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify"; 
import { getInstructorById, updateInstructorById } from "../../services/InstructorServices";

export default function EditInstructorDetails() {
     
    const [Detail, setDetail] = useState({ bio:'', specialty:'', experience_years:'', certifications:'', rating:'', available_days:'', session_duration:'', languages:''});
 


    const navigate = useNavigate();

    const ID = localStorage.getItem("user_id");
    if (!ID) return;
    
    
   

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

    const handleChange = (event) => {
    setDetail({ ...Detail, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(Detail);
      const response = await updateInstructorById(ID, Detail);
      console.log(response);
      if (response.status === 200) {
        // show success message
        toast.success("Details Updated Succesfullly", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        navigate("../instructorDetails/${ID}");
      }

    } catch (error) {
      console.log(error);
      if (error.response.status === 500) {
        // show failure message
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }

  }


    return (
        <div>
            <h2 className="mb-4">Additional Information</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col sm={12} md={8}>
                        <Form.Group className="mb-3">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control placeholder="Bio"  onChange={handleChange} name="bio" value={Detail.bio}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>specialty</Form.Label>
                            <Form.Control  placeholder="specialty"  onChange={handleChange} name="speciality" value={Detail.specialty}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>experience_years</Form.Label>
                            <Form.Control placeholder="experience_years" disabled  onChange={handleChange} name="experience_years" value={Detail.experience_years} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>certifications</Form.Label>
                            <Form.Control placeholder="certifications"  onChange={handleChange} name="certifications" value={Detail.certifications}  />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>rating</Form.Label>
                            <Form.Control placeholder="rating" disabled  onChange={handleChange} name="rating" value={Detail.rating}  />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>available_days</Form.Label>
                            <Form.Control placeholder="available_days"  onChange={handleChange} name="available_days" value={Detail.available_days}  />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>session_duration</Form.Label>
                            <Form.Control placeholder="session_duration" disabled  onChange={handleChange} name="session_duration" value={Detail.session_duration}  />
                        </Form.Group>
                        

                        <div className="d-flex gap-2">
                            <Button variant="danger" type="submit">Save Changes</Button>
                        </div>
                    </Col>
                </Row>
            </Form>



        </div>
    );
}
