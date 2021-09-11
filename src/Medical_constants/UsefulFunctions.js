function age(patient_date_birth, today_date) {
    return ((today_date.substring(0, 4)) - (patient_date_birth.substring(0, 4)));
  }
export default age;
