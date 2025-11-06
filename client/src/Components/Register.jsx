import { Button, Form } from "react-bootstrap";
import { register } from "../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "../assets/css/register.css";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function Register() {
  const navigate = useNavigate();

  const registerValid = Yup.object().shape({
    full_name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password_hash: Yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/,"Password must be between 8 to 12 characters, at least one uppercase, one lowercase, one numeric, and no symbols allowed"),
    phone: Yup.string().required("Phone is required").matches(/^[6-9]\d{9}$/, "Phone no. is invalid"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await register(values);
      if (response.status === 200 || response.status === 201) {
        toast.success("Registration successful! Please login.", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
        resetForm();
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message || "Registration failed.", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
          transition: Bounce,
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="register-page-container">
      <div className="register-card">

        <div className="register-right-panel">
          <h1 className="fw-bold">Welcome Back!</h1>
          <p className="mt-2">
            Start your journey with us by creating an account.
          </p>

          <Button
            variant="outline-light"
            className="mt-3 px-4 py-2"
            as={Link}
            to="/login"
          >
            LOGIN
          </Button>
        </div>

        <div className="register-left-panel">
          <h2 className="fw-bold text-center mb-4 register-title">Register</h2>

          <Formik
            initialValues={{
              full_name: "",
              email: "",
              password_hash: "",
              phone: "",
            }}
            validationSchema={registerValid}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Name</Form.Label>
                  <Field
                    as={Form.Control}
                    style={{ color: "white", backgroundColor: "#262728" }}
                    type="text"
                    placeholder="Enter full name"
                    name="full_name"
                  />
                  <ErrorMessage
                    name="full_name"
                    component="div"
                    className="text-danger mt-1"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Email</Form.Label>
                  <Field
                    as={Form.Control}
                    style={{ color: "white", backgroundColor: "#262728" }}
                    type="email"
                    placeholder="Enter email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger mt-1"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Password</Form.Label>
                  <Field
                    as={Form.Control}
                    style={{ color: "white", backgroundColor: "#262728" }}
                    type="password"
                    placeholder="Enter password"
                    name="password_hash"
                  />
                  <ErrorMessage
                    name="password_hash"
                    component="div"
                    className="text-danger mt-1"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Phone</Form.Label>
                  <Field
                    as={Form.Control}
                    style={{ color: "white", backgroundColor: "#262728" }}
                    type="text"
                    placeholder="Enter phone number"
                    name="phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-danger mt-1"
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button
                    type="submit"
                    className="register-btn px-5 py-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Register"}
                  </Button>
                </div>

                <div className="text-center mt-3">
                  <Link to="/" className="register-link">
                    Already have an account? Login
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
