import axios from 'axios';
import { API_BASE_URL, COURSES_API_URL } from '../constants/APIConstant';

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
export function getCourseByUserId(id){
    return axios.get(`/`);
}
export function updateCourse(id, formData){
    return axios.put(`${COURSES_API_URL}/${id}`, formData);
}

export function getCourseScheduleByID(id){
    return axios.get(`${COURSES_API_URL}/schedule/${id}`);
}


export function enrollInCourse(formData){
    return axios.post(`${API_BASE_URL}/enroll`,formData);
}


