function age(patientDataBirth, todayDate) {
  return todayDate.substring(0, 4) - patientDataBirth.substring(0, 4);
}
export default age;
