import axios from 'axios';
import { API_BASE_URL } from '../config/apiConfig';

export const summarizeText = async (text) => {
  try {
    // Send the request with the content in the body
    const response = await axios.post(`${API_BASE_URL}/summarize`, { content: text });

    // Log the content of the response
    console.log('response', response.data.summary);
    return response.data.summary; // return the summary text to the component


  } catch (error) {
    console.error('Error summarizing text:', error);
    throw new Error('Failed to summarize text.');
  }
};

export const clearJsonFile = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/clear`);
    console.log('JSON file cleared:', response.data);
  } catch (error) {
    console.error('Error clearing JSON file:', error);
    throw new Error('Failed to clear JSON file.');
  }
};
