import axios from "axios";
import { baseURL } from "../constants/constants";

const api = axios.create({
    withCredentials: true,
    baseURL: baseURL
})

api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export {api}