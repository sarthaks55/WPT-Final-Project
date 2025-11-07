import axios from 'axios';
import { API_BASE_URL, INSTRUCTOR_API_URL } from '../constants/APIConstant';


export function getAllInstructor(){
    
    return axios.get(`${INSTRUCTOR_API_URL}`);
}

export function getInstructorById(id){
    
    return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
}

export function updateInstructorById(Detail){
    
    return axios.put(`${INSTRUCTOR_API_URL}`,Detail);
}

export const getAllInstructorsCount = async () => {
     const res = await axios.get(`${API_BASE_URL}/totalinstructorscount`);
     return res.data[0].InstructorsCount;
}