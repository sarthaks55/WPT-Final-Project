import axios from 'axios';
import { CONTACT_API_URL } from '../constants/APIConstant';

export async function ContactUs(formData){
    return axios.post(CONTACT_API_URL, formData);
}

export async function getContactUs(){
    return axios.get(CONTACT_API_URL);
}