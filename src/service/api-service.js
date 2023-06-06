// apiService.js
import axios from 'axios';
const BASE_URL = 'https://gorest.co.in/public/v2';
const AUTH_TOKEN = 'b2c0050b2bddbecaf25747d9be2345442ec4137a8afc1d647fd56f846cb69502';

const registerUser = async (userData) => {

try {
    const response = await axios.post(`${BASE_URL}/users`, userData, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const createComment = async (comment) => {
    try {
      const response = await axios.post(`${BASE_URL}/comments`, comment, {
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create comment.');
    }
  };

export { registerUser ,createComment };
