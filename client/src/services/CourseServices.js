import axios from 'axios';
import { COURSES_API_URL } from '../constants/APIConstant';

export async function saveCourse(formData){
    return axios.post(COURSES_API_URL, formData);
}

export function getAllCourses(){
    return axios.get(COURSES_API_URL);
}

export function deleteCourse(id){
    return axios.delete(`${COURSES_API_URL}/${id}`);
}
export function getCourseByID(id){
    return axios.get(`${COURSES_API_URL}/${id}`);
}
export function updateCourse(id, formData){
    return axios.put(`${COURSES_API_URL}/${id}`, formData);
}
