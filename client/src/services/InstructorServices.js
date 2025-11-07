

import axios from 'axios';
import { INSTRUCTOR_API_URL } from '../constants/APIConstant';


export function getAllInstructor(){
    
    return axios.get(`${INSTRUCTOR_API_URL}`);
}

export function getInstructorById(id){
    
    return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
}

export function updateInstructorById(Detail){
    
    return axios.put(`${INSTRUCTOR_API_URL}`,Detail);
}