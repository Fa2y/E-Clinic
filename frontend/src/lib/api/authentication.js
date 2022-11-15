import axios from 'axios';
import SERVER_URL from '../utils/constants';
import { getToken } from '../utils/helpers';

const Auth = {
  signUp: async (data) => {
    try {
      const response = await axios.post(
        `${SERVER_URL}/rest-auth/registration/`,
        data,
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  login: async (data) => {
    try {
      const response = await axios.post(`${SERVER_URL}/rest-auth/login/`, data);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  getUser: async () => {
    const token = getToken();
    try {
      const response = await axios.get(`${SERVER_URL}/rest-auth/user/`, {
        headers: {
          Authorization: `token ${encodeURIComponent(token)}`,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  logout: async () => {
    const token = getToken();
    try {
      const response = await axios.post(`${SERVER_URL}/rest-auth/logout/`, {
        headers: {
          Authorization: `token ${encodeURIComponent(token)}`,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

export default Auth;
