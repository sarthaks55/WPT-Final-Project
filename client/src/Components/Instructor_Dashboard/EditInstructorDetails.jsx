import { Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { getInstructorById, updateInstructorById } from "../../services/InstructorServices";

export default function EditInstructorDetails() {
const ID = localStorage.getItem("user_id");
  if (!ID) return null;
  const [Detail, setDetail] = useState({
    user_id:ID,
    bio: "",
    specialty: "",
    experience_years: "",
    certifications: "",
    rating: "",
    available_days: "",
    session_duration: ""
    
  });

  const navigate = useNavigate();
  

  const fetchDetails = async () => {
    try {
      const response = await getInstructorById(ID);
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleChange = (event) => {
    setDetail({ ...Detail, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // basic validation rules
    if (!Detail.bio || Detail.bio.trim().length < 10) {
      toast.error("Bio must be at least 10 characters long.", { transition: Bounce });
      return;
    }

    const specialtyRegex = /^[A-Za-z ]{3,50}$/;
    if (!Detail.specialty || !specialtyRegex.test(Detail.specialty)) {
      toast.error("Enter a valid specialty (letters only, 3–50 chars).", { transition: Bounce });
      return;
    }

    if (!Detail.certifications || Detail.certifications.trim().length < 3) {
      toast.error("Enter valid certifications (min 3 characters).", { transition: Bounce });
      return;
    }

    if (!Detail.available_days || Detail.available_days.trim() === "") {
      toast.error("Available days field is required.", { transition: Bounce });
      return;
    }

    try {
      const response = await updateInstructorById(Detail);
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Details Updated Successfully!", { transition: Bounce });
        navigate(`../instructorDetails/${ID}`);
      }
      else if (response.status === 404){
        toast.warning("Instructor not found",{ transition: Bounce });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", { transition: Bounce });
    }
  };

  return (
    <div>
      <h2 className="mb-4">Additional Information</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} md={8}>
            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                placeholder="Bio"
                onChange={handleChange}
                name="bio"
                value={Detail.bio}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Specialty</Form.Label>
              <Form.Control
                placeholder="Specialty"
                onChange={handleChange}
                name="specialty"
                value={Detail.specialty}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Experience Years</Form.Label>
              <Form.Control
                placeholder="Experience Years"
                disabled
                onChange={handleChange}
                name="experience_years"
                value={Detail.experience_years}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Certifications</Form.Label>
              <Form.Control
                placeholder="Certifications"
                onChange={handleChange}
                name="certifications"
                value={Detail.certifications}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                placeholder="Rating"
                disabled
                onChange={handleChange}
                name="rating"
                value={Detail.rating}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Available Days</Form.Label>
              <Form.Control
                placeholder="Available Days"
                onChange={handleChange}
                name="available_days"
                value={Detail.available_days}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Session Duration</Form.Label>
              <Form.Control
                placeholder="Session Duration"
                disabled
                onChange={handleChange}
                name="session_duration"
                value={Detail.session_duration}
              />
            </Form.Group>

            <div className="d-flex gap-2">
              <Button variant="danger" type="submit">
                Save Changes
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
