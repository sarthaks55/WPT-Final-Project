import React from "react";
import { Card, Row, Col, Table, Badge } from "react-bootstrap";

const AdDashboard = () => {
  return (
    <div className="p-4">
      <h3 className="mb-4">Dashboard</h3>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="p-3 text-center shadow-sm">
            <h4>80</h4>
            <p>Users</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 text-center shadow-sm">
            <h4>21</h4>
            <p>Courses</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 text-center shadow-sm">
            <h4>12</h4>
            <p>instructors</p>
          </Card>
        </Col>
      </Row>

      
    </div>
  );
};

export default AdDashboard;
   