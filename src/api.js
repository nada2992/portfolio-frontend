import axios from "axios";

const API_URL = "https://backend-1-2nv9.onrender.com/api";

export const getProjects = () => axios.get(`${API_URL}/projects`);
export const deleteProject = (id, password) =>
  axios.delete(`${API_URL}/projects/${id}`, {
    headers: { "X-Admin-Password": password },
  });
