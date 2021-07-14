import axios from "axios";
import { SERVER_URL } from "../utils/constants";
import {getToken} from "../utils/helpers";

export const patientAPI = {
    fetchPatients: async ()=>{
        const token = getToken();
        try {
      const response = await axios.get(
        `${SERVER_URL}/api/patients/`,
        {
          headers: {
            Authorization: `token ${encodeURIComponent(token)}`,
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
    },
    editPatient: async (pid,data)=>{
        const token = getToken();
        try {
      const response = await axios.patch(
        `${SERVER_URL}/api/patients/${pid}/`,data,
        {
          headers: {
            Authorization: `token ${encodeURIComponent(token)}`,
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
    },
    deletePatient: async (pid)=>{
        const token = getToken();
        try {
      const response = await axios.delete(
        `${SERVER_URL}/api/patients/${pid}/`,
        {
          headers: {
            Authorization: `token ${encodeURIComponent(token)}`,
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
    },
    createPatient: async (data)=>{
        const token = getToken();
        try {
      const response = await axios.post(
        `${SERVER_URL}/api/patients/`,data,
        {
          headers: {
            Authorization: `token ${encodeURIComponent(token)}`,
          },
        }
      );
        return response;
        } catch (error) {
        return error.response;
        }
    },
}

