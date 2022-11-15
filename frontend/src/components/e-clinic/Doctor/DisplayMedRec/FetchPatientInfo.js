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
import medRec from '../medRec';

//css
const styles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    width: 250,
  },
}));
//-----------
export default function FetchPatientInfo(props) {
  console.log(medRec.Aymen[0]);
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
  const [values, setValues] = React.useState({ initialState });
  const [edited_values, setEdited] = React.useState('');
  const handlePatientChange = (event, selectedValue) => {
    setValues({
      ...values,
      patient_data: selectedValue,
      patient: selectedValue?.pid,
    });
    props.handleClick(values['patient'], 'patient');
  };
  const handleChange = (event) => {
    if (event?.target) {
      setEdited({
        ...edited_values,
        [event.target.name]: event.target.value,
      });
    }
    props.handleClick(edited_values);
  };

  return (
    <div>
      <GridContainer>
        <h2>
          <strong>Patient&apos;s informations</strong>
        </h2>
        <GridItem>
          <h4>
            <strong>Last name : </strong>{' '}
            {props.values.patient_data.user.last_name}
          </h4>
          <h4>
            <strong>First name : </strong>{' '}
            {props.values.patient_data.user.first_name}
          </h4>
          <h4>
            <strong>University's name : </strong> Higher School of Computer
            Science 08 May 1945 - Sidi Bel Abbes
          </h4>
          <h4>
            <strong>Date of birth : </strong>
            {props.values.patient_data.user.date_of_birth}
          </h4>
          <h4>
            <strong>Adress : </strong> {props.values.patient_data.user.address}
          </h4>
          <h4>
            <strong>Level : </strong>{' '}
            {props.values.patient_data.education_level}
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              {medRec.Aymen[0].bloodType}
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
              {medRec.Aymen[0].familySituation}
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
            label={medRec.Aymen[0].social_number}
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
