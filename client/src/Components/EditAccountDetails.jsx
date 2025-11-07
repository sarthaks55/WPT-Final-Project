import { Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../services/UserService";
import { Bounce, toast } from "react-toastify";

export default function EditAccountDetails() {
  const [account, setAccount] = useState({
    full_name: "",
    email: "",
    phone: "",
    password_hash: "",
  });

  const navigate = useNavigate();
  const ID = localStorage.getItem("user_id");
  if (!ID) return null;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await getUserById(ID);
        setAccount(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);

  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const nameRegex = /^[A-Za-z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passRegex = /^.{6,}$/;

    if (!account.full_name || !nameRegex.test(account.full_name)) {
      toast.error("Enter a valid full name (letters only).", { transition: Bounce });
      return;
    }
    if (!account.phone || !phoneRegex.test(account.phone)) {
      toast.error("Enter a valid 10-digit phone number.", { transition: Bounce });
      return;
    }
    if (!account.password_hash || !passRegex.test(account.password_hash)) {
      toast.error("Password must be at least 6 characters.", { transition: Bounce });
      return;
    }

    try {
      const response = await updateUser(ID, account);
      if (response.status === 200) {
        toast.success("Profile updated successfully!", { transition: Bounce });
        navigate("../account");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.", { transition: Bounce });
    }
  };

  return (
    <div>
      <h2 className="mb-4">Personal Information</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} md={8}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                placeholder="Full Name"
                name="full_name"
                value={account.full_name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="E-mail"
                name="email"
                value={account.email}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                placeholder="Phone"
                name="phone"
                value={account.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password_hash"
                value={account.password_hash}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="danger" type="submit">
              Save Changes
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
