import { Alert, Col, Container, Row } from "react-bootstrap";

export function UDashboard() {
    return (
        <Container className="mt-5">
            <Row>
                <Col lg={8}>
                    <Alert variant="primary">Welcome to Yoga Center</Alert>
                    <p>You can perform crud operations on product as admin</p>
                </Col>
            </Row>
        </Container>
    )
}