
import { useState, useEffect } from "react";
import { Container, Row, Col, Offcanvas, Button } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sidebar";


export default function UDashboard() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  
  useEffect(() => {
    setShow(false);
  }, [location]);

  return (
    <Container fluid className="p-3">
      <Row>
        <Col
          md={3}
          lg={2}
          className="d-none d-md-block"
          style={{ minHeight: "80vh" }}
        >
          <Sidebar />
        </Col>


        <Col xs={12} className="d-md-none mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Dashboard</h5>
            <Button variant="outline-danger" onClick={() => setShow(true)}>
              Menu
            </Button>
          </div>
        </Col>


        <Col xs={12} md={9} lg={10}>
          <Outlet />
        </Col>
      </Row>


      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {show && (
            <Sidebar onClickItem={() => setShow(false)} />
          )}

        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}
