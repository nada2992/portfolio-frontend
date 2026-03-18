import axios from 'axios';

const API_URL = "http://localhost:8080/api";

export const getProjects = () => axios.get(`${API_URL}/projects`);
export const deleteProject = (id, password) => 
    axios.delete(`${API_URL}/projects/${id}`, { headers: { 'X-Admin-Password': password } });