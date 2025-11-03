import axios from 'axios';
import { USER_API_URL } from '../constants/APIConstant';

export async function saveUser(formData){
    return axios.post(USER_API_URL, formData);
}

export function getAllUsers(){
    return axios.get(USER_API_URL);
}

export function deleteUser(id){
    return axios.delete(`${USER_API_URL}/${id}`);
}

export function getUserById(id){
    return axios.get(`${USER_API_URL}/${id}`);
}

export function updateUser(id, formData){
    return axios.put(`${USER_API_URL}/${id}`, formData);
}
// 100 functions