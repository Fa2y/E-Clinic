import axios from 'axios';
import SERVER_URL from '../utils/constants';
import { getToken } from '../utils/helpers';

const patientAPI = {
  fetchMedicalRecord: async () => {
    const token = getToken();
    try {
      const response = await axios.get(
        `${SERVER_URL}/api-medical/patient_medical_record/`,
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
  fetchMedicalExam: async () => {
    const token = getToken();
    try {
      const response = await axios.get(
        `${SERVER_URL}/api-medical/patient_medical_exam/`,
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
  fetchAppointments: async () => {
    const token = getToken();
    try {
      const response = await axios.get(
        `${SERVER_URL}/api-appointment/patient-appointments/`,
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
  requestAppointment: async (data) => {
    const token = getToken();
    try {
      const response = await axios.post(
        `${SERVER_URL}/api-appointment/patient-appointments/`,
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

export default patientAPI;
