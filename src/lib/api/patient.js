import axios from 'axios';
import SERVER_URL from '../utils/constants';
import { getToken } from '../utils/helpers';

const patientAPI = {
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
  addMedicalExamDetails: async (meid, part, data) => {
    const token = getToken();
    try {
      const formData = new FormData();
      if (part === 'paraclinical_exam') {
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value);
        });
        formData.append('part', 'paraclinical_exam');
      }
      const response = await axios.post(
        `${SERVER_URL}/api-medical/medical_exam/${meid}/create_detail/`,
        part === 'paraclinical_exam' ? formData : { part, data },
        {
          headers: {
            Authorization: `token ${encodeURIComponent(token)}`,
            'Content-Type':
              part === 'paraclinical_exam'
                ? 'multipart/form-data'
                : 'application/json',
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
