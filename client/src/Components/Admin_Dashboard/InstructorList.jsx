import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { getAllInstructor } from "../../services/InstructorServices";

const InstructorList = () => {
  const [Details, setDetails] = useState([{ id:'', bio:'', specialty:'', experience_years:'', certifications:'', rating:'', available_days:'', session_duration:'', languages:''}]);
 
    const fetchDetails = async () => {
        try {
            const response = await getAllInstructor();
            console.log(response.data);
            setDetails(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDetails();
    }, []);
  return(
    <div className="p-4">
    <h3>Instructor List</h3>
     
            {
                Details.length === 0 ? <Alert variant="warning">No Instructor found</Alert> : <Table bordered hover className="align-middle text-center">
                    <thead>
                        <tr >
                            <th>ID</th>
                            <th>Bio</th>
                            <th>Speciality</th>
                            <th>experience_years</th>
                            <th>certifications</th>
                            <th>rating</th>
                            <th>available_days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Details.map((Detail, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{Detail.id}</td>
                                        <td>{Detail.bio}</td>
                                        <td>{Detail.specialty}</td>
                                        <td>{Detail.experience_years}</td>
                                        <td>{Detail.certifications}</td>
                                        <td>{Detail.rating}</td>
                                        <td>{Detail.available_days}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            }

  </div>
  );
}

export default InstructorList;
  