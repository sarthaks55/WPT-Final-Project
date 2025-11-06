

import axios from 'axios';
import { INSTRUCTOR_API_URL } from '../constants/APIConstant';


export function getAllInstructor(){
    
    return axios.get(`${INSTRUCTOR_API_URL}`);
}

export function getInstructorById(id){
    
    return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
}

export function updateInstructorById(id,Detail){
    
    return axios.post(`${INSTRUCTOR_API_URL}/${id}`,Detail);
}

export function deleteInstructor(id) {
  return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
}

export function addInstructor(formData) {
  return axios.post(`${INSTRUCTOR_API_URL}`, formData);
}

export function updateInstructor(id, data) {
  return axios.put(`${INSTRUCTOR_API_URL}/update/${id}`, data);
}


