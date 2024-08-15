import axios from 'axios';

const API_URL = 'http://localhost:8000/api/todo';

const api = {
  getTasks: () => axios.get(`${API_URL}/tasks`),
  createTask: (task) => axios.post(`${API_URL}/tasks`, task),
  updateTask: (id, task) => axios.put(`${API_URL}/tasks/${id}`, task),
  deleteTask: (id) => axios.delete(`${API_URL}/tasks/${id}`),
};

export default api;
