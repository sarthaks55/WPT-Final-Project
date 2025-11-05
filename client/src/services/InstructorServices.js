

import axios from 'axios';
import { INSTRUCTOR_API_URL } from '../constants/APIConstant';



export function getInstructorById(id){
    
    return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
}

export function updateInstructorById(id,Detail){
    
    return axios.post(`${INSTRUCTOR_API_URL}/${id}`,Detail);
}