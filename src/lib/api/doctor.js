import axios from 'axios';
import SERVER_URL from '../utils/constants';
import { getToken } from '../utils/helpers';

const doctorAPI = {
  fetchPatients: async () => {
    const token = getToken();
    try {
      const response = await axios.get(`${SERVER_URL}/api/patients/`, {
        headers: {
          Authorization: `token ${encodeURIComponent(token)}`,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  fetchMedicalRecord: async () => {
    const token = getToken();
    try {
      const response = await axios.get(
        `${SERVER_URL}/api-medical/medical_record/`,
        {
          headers: {
            Authorization: `token ${encodeURIComponent(token)}`,
          },
        },
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  editMedicalRecord: async (mrid, data) => {
    const token = getToken();
    try {
      const response = await axios.patch(
        `${SERVER_URL}/api-medical/medical_record/${mrid}/`,
        data,
        {
          headers: {
            Authorization: `token ${encodeURIComponent(token)}`,
          },
        },
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  //-------------
  editMedicalExam: async (meid, data) => {
    const token = getToken();
    try {
      const response = await axios.patch(
        `${SERVER_URL}/api-medical/medical_exam/${meid}/`,
        data,
        {
          headers: {
            Authorization: `token ${encodeURIComponent(token)}`,
          },
        },
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  deleteMedicalExam: async (meid) => {
    const token = getToken();
    try {
      const response = await axios.delete(
        `${SERVER_URL}/api-medical/medical_exam/${meid}/`,
        {
          headers: {
            Authorization: `token ${encodeURIComponent(token)}`,
          },
        },
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  createMedicalRecord: async (data) => {
    const token = getToken();
    try {
      const response = await axios.post(
        `${SERVER_URL}/api-medical/medical_record/`,
        data,
        {
          headers: {
            Authorization: `token ${encodeURIComponent(token)}`,
          },
        },
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  //-------------------------
  createMedicalExam: async (data) => {
    const token = getToken();
    try {
      const response = await axios.post(
        `${SERVER_URL}/api-medical/medical_exam/`,
        data,
        {
          headers: {
            Authorization: `token ${encodeURIComponent(token)}`,
          },
        },
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

export default doctorAPI;
