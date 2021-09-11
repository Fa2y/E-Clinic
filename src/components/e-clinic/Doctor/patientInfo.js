import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// core components
import GridItem from 'components/Grid/GridItem.js';
import TextField from 'components/controls/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GridContainer from 'components/Grid/GridContainer';
import PatientName from 'components/e-clinic/Doctor/patientName';
import MedicalObjects from 'Medical_constants/constants';
//css
const styles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    width: 250,
  },
}));
//-----------
export default function PatientInfo(props) {
  const classes = styles();
  const initialState = {
    patient_data: {
      user: {
        first_name: '',
        last_name: '',
      },
      type: '',
      education_level: '',
      patient: '',
      social_number: 0,
      bloodType: '',
      family_situation: '',
    },
  };
  const [values, setValues] = React.useState({
    ...initialState,
  });
  const handlePatientChange = (event, selectedValue) => {
    setValues({
      ...values,
      patient_data: selectedValue,
      patient: selectedValue?.pid,
    });
    props.handleClick(values['patient'], 'patient');
    props.handleClick(values['patient_data'], 'patient_data');
  };
  const handleChange = (event) => {
    if (event?.target) {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
      let targetName = event.target.name;
      props.handleClick(values[targetName], targetName);
    }
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12}>
          <PatientName
            patient={values.patient_data}
            handleChange={handlePatientChange}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <h4>
            <strong>Last name : </strong> {values.patient_data.user.last_name}
          </h4>
          <h4>
            <strong>First name : </strong> {values.patient_data.user.first_name}
          </h4>
          <h4>
            <strong>University's name : </strong> Higher School of Computer
            Science 08 May 1945 - Sidi Bel Abbes
          </h4>
          <h4>
            <strong>Date of birth : </strong>
            {values.patient_data.user.date_of_birth}
          </h4>
          <h4>
            <strong>Adress : </strong> {values.patient_data.user.address}
          </h4>
          <h4>
            <strong>Level : </strong> {values.patient_data.education_level}
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Blood type
            </InputLabel>
            <Select
              name="bloodType"
              value={values.bloodType}
              onChange={handleChange}
            >
              {MedicalObjects.BLOODTYPE.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Familly situation
            </InputLabel>
            <Select
              name="familySituation"
              value={values.familly_situation}
              onChange={handleChange}
            >
              {MedicalObjects.FAMILLYSITUATION.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <TextField
            label="Social number"
            name="social_number"
            value={values.social_number}
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
