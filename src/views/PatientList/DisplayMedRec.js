/* eslint-disable camelcase */
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Button from '@material-ui/core/Button';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
// import doctorAPI from 'lib/api/doctor';
// import { extractErrorMsg } from 'lib/utils/helpers';
// import { toast } from 'react-toastify';
import AsynchronousSelectMr from 'components/e-clinic/Doctor/AsynchronousSelectMr';
import FetchTobacoConsumption from 'components/e-clinic/Doctor/DisplayMedRec/FetchTobacoConsumption';
import InputLabel from '@material-ui/core/InputLabel';
// core components
import GridItem from 'components/Grid/GridItem';
import TextField from 'components/controls/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GridContainer from 'components/Grid/GridContainer';
import MedicalObjects from 'Medical_constants/constants';
import medRec from 'components/e-clinic/Doctor/medRec';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CardHeader from 'components/Card/CardHeader';
import doctorAPI from 'lib/api/doctor';
import { extractErrorMsg } from 'lib/utils/helpers';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
  btnDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    margin: 4,
  },
  formControl: {
    minWidth: 120,
    width: 250,
  },
}));

export default function DisplayPatientMedicalRecord() {
  const classes = useStyles();

  return (
    <div>
      <form key={keyForm}>
        <GridContainer>
          <Card>
            <CardHeader color="info">
              <h3>Dislplay Medical Record</h3>
            </CardHeader>
            <CardBody>
              <h2>
                <strong>Patient&apos;s informations</strong>
              </h2>
              <GridContainer>
                <GridItem>
                  <h4>
                    <strong>Last name : </strong>{' '}
                    {/* {values.patient_data.user.last_name} */}
                    Benmammar
                  </h4>
                  <h4>
                    <strong>First name : </strong>{' '}
                    {/* {values.patient_data.user.first_name} */}
                    Houssam
                  </h4>
                  <h4>
                    <strong>University name : </strong> Higher School of
                    Computer Science 08 May 1945 - Sidi Bel Abbes
                  </h4>
                  <h4>
                    <strong>Date of birth : </strong>
                    {/* {values.patient_data.user.date_of_birth} */}
                    03/04/1999
                  </h4>
                  <h4>
                    <strong>Adress : </strong>{' '}
                    {/* {values.patient_data.user.address} */}
                    El Bayadh
                  </h4>
                  <h4>
                    <strong>Level : </strong>{' '}
                    {/* {values.patient_data.education_level} */}1 CS
                  </h4>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Blood type : A+"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Familly situation : single"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Social number : 32"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <h2>
                <strong>Personal history</strong>
              </h2>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControlLabel
                    disabled
                    control={
                      <Checkbox checked="true" name="smoking" color="primary" />
                    }
                    label="Smoking"
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={6} sm={3}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Number unit : 10"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={6} sm={3}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Age of first cigarette : 18"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={6} sm={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked="false"
                        name="oldSmoker"
                        color="primary"
                      />
                    }
                    label="Old smoker"
                  />
                </GridItem>
                <GridItem xs={6} sm={3}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="duration : 5 year"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={6} sm={3}>
                  <FormControlLabel
                    disabled
                    control={
                      <Checkbox
                        checked="false"
                        name="chewing"
                        color="primary"
                      />
                    }
                    label="Chewing"
                  />
                </GridItem>
                <GridItem xs={6} sm={3}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Number unit : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={6} sm={3}>
                  <FormControlLabel
                    disabled
                    control={
                      <Checkbox
                        checked="false"
                        onChange={handleChangeChecked}
                        name="injection"
                        color="primary"
                      />
                    }
                    label="Injection"
                  />
                </GridItem>
                <GridItem xs={6} sm={3}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Number unit : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={3}>
                  <FormControlLabel
                    disabled
                    control={
                      <Checkbox
                        checked="false"
                        name="alcohol"
                        color="primary"
                      />
                    }
                    label="Alcohol"
                  />
                </GridItem>
                <GridItem xs={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked="false"
                        name="medication_consumption"
                        color="primary"
                      />
                    }
                    label="Medication"
                  />
                </GridItem>
                <GridItem xs={3}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Medication : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <h2>
                <strong>Screening visit</strong>
              </h2>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Date : 9-8-2021"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Weight : 70"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Height : 1.70"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem>
                  <h4>
                    <strong>Hearing problems</strong>
                  </h4>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Hearing right  : good"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id="standard-read-only-input"
                    //label="Read Only"
                    defaultValue="Hearing right  : bad"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <hr></hr>
              <GridContainer>
                <GridItem>
                  <h4>
                    <strong>Visaul problems</strong>
                  </h4>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Visual acuity with correction left'  : bad"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Visual acuity with correction right'  : good"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Visual acuity without correction right'  : 5/10"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Visual acuity without correction right'  : 6/10"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <hr></hr>
              <GridContainer>
                <GridItem>
                  <h4>
                    <strong>Skin,Orl,Cardiovascular problems....</strong>
                  </h4>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Skin problem'  : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Skin exam'  : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Ophtamlmology problem '  : tearing"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Ophtalmology exam'  : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Orl problems  : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Orl exam  : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Locomoto problems'  : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Locomoto exam  : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    defaultValue="Cardio vascular  : pain on rest "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <TextField
                    defaultValue="Cardio vascular exam'  : 6/10"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <TextField
                    defaultValue="Respiratory'  : chest pain"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <TextField
                    defaultValue="Respiratory exam  : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <TextField
                    defaultValue="Digestive  : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <TextField
                    defaultValue="Digestive exam : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <TextField
                    defaultValue="Aptitude  : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <TextField
                    defaultValue="Reason  : "
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <br />
            <CardFooter />
          </Card>
        </GridContainer>
      </form>
    </div>
  );
}
