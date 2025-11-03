import axios from "axios";
import { ADMIN_API_URL, API_BASE_URL } from "../constants/APIConstant";

export function adminLogin(formData){
    return axios.post(`${API_BASE_URL}/login`, formData)
}