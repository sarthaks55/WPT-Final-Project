import axios from 'axios';
import { COURSES_API_URL } from '../constants/APIConstant';

export async function saveProduct(formData){
    return axios.post(COURSES_API_URL, formData);
}

export function getAllCourses(){
    return axios.get(COURSES_API_URL);
}

export function deleteProduct(id){
    return axios.delete(`${COURSES_API_URL}/${id}`);
}

export function getProductById(id){
    return axios.get(`${COURSES_API_URL}/${id}`);
}

export function updateProduct(id, formData){
    return axios.put(`${COURSES_API_URL}/${id}`, formData);
}
// 100 functions