import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Update this to your FastAPI server URL

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    
    return response.data; // Assuming the response contains user data or a token
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Login failed. Please try again.');
  }
};
