import { useEffect, useState } from "react";
import { Alert, Col, Container, Row, Table } from "react-bootstrap";

import { getScheduleByUserId } from "../services/UserService";



export function ScheduleByUserId() {
   
    const [schedule, setSchedule] = useState([]);
    const ID = localStorage.getItem("user_id");
    if (!ID) return;

    

    const fetchSchedule = async () => {
        try {
            const response = await getScheduleByUserId(ID);
            
            console.log(response.data);
            setSchedule(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSchedule();
    }, []);



    return (
        <Container className="mt-3">
            <Row>
                <Col lg={8}>
                    <Alert variant="primary">Your Course List</Alert>
                </Col>
            </Row>
            {
                schedule.length === 0 ? <Alert variant="warning">No Courses found</Alert> : <Table className="mt-3">
                    <thead>
                        <tr >

                            <th>schedule_id</th>
                            <th>course_id</th>
                            <th>course_name</th>
                            <th>start_datetime</th>
                            <th>end_datetime</th>
                            <th>instructor_id</th>
                            <th>instructor_name</th>
                            <th>location</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            schedule.map((schedules, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{schedules.schedule_id}</td>
                                        <td>{schedules.course_id}</td>
                                        <td>{schedules.course_name}</td>
                                        <td>{schedules.start_datetime}</td>
                                        <td>{schedules.end_datetime}</td>
                                        <td>{schedules.instructor_id}</td>
                                        <td>{schedules.instructor_name}</td>
                                        <td>{schedules.location}</td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            }

        </Container>
    )
}