function age(patientDataBirth, todayDate) {
  return patientDataBirth
    ? todayDate.substring(0, 4) - patientDataBirth.substring(0, 4)
    : 0;
}
export default age;
