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
  if (error.response && error.response.data && error.response.data.message) {
    // If there is an error response from the API, throw the custom error message
    throw new Error(error.response.data.message);
  } else {
    // If there is no specific error response, throw a generic error message
    throw new Error('Failed to register user. Please try again later.');
  }
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

   const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete user.');
    }
  };

  const getUserList =async()=>{
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch user list.');
    }
  }

export { registerUser ,createComment, deleteUser,getUserList};
