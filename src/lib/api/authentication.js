import { SERVER_URL } from "../utils/constants.js";
import axios from "axios";

const Auth = {
  signUp: async (data) => {
    try {
      const response = await axios.post(`${SERVER_URL}/api/patients/`, data);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  login: async () => {},
};

export default Auth;
