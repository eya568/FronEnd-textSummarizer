import axios from 'axios';
import { API_BASE_URL } from '../config/apiConfig';
import { useState } from 'react';

export const summarizeText = async (text) => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
  console.log('response', response.data.content);
    console.log('Response content:', response.data.content);
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