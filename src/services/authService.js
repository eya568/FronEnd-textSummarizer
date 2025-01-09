import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Update this to your FastAPI server URL

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data; // Assuming the response contains access_token and token_type
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Login failed. Please try again.');
  }
};
export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { username, email, password });
    return response.data; // Assuming the response contains status and user_id
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Registration failed. Please try again.');
  }
};
