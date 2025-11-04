
import { Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../services/UserService";
import { Bounce, toast } from "react-toastify"; 

export default function EditAccountDetails() {
  
  const [account, setAccount] = useState({ full_name: '', email: '', phone: '', password_hash: '' });

  const navigate = useNavigate();

  const ID = localStorage.getItem("user_id");
  if (!ID) return;
  console.log(ID);
  const fetchDetails = async () => {
    try {
      const response = await getUserById(ID);
      console.log(response.data);
      setAccount(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(account);
      const response = await updateUser(ID, account);
      console.log(response);
      if (response.status === 200) {
        // show success message
        toast.success("Profile Edited Succesfullly", {
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
        navigate("../account");
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
  useEffect(() => {
    fetchDetails();
  }, []);



  return (
    <div>
      <h2 className="mb-4">Personal Information</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} md={8}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control placeholder="Full Name" onChange={handleChange} name="full_name" value={account.full_name} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="E-mail" onChange={handleChange} disabled name="email" value={account.email} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control placeholder="Phone" onChange={handleChange} name="phone" value={account.phone} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" onChange={handleChange} name="password_hash" value={account.password_hash} type="password" />
            </Form.Group>
            <div className="d-flex gap-2">
              <Button variant="danger" type="submit"
              >Save Changes</Button>
            </div>
          </Col>
        </Row>
      </Form>



    </div>
  );
}
