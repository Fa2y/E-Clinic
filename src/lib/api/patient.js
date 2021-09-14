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
};

export default patientAPI;
