import { Alert, Col, Container, Row } from "react-bootstrap";

export default function Dashboard() {
    return (
        <Container className="mt-5">
            <Row>
                <Col lg={8}>
                    <Alert variant="primary">Welcome to Yoga Center App</Alert>
                    <p>You can perform any operation on courses as admin</p>
                </Col>
            </Row>
        </Container>
    )
}