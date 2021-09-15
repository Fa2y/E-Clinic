/* eslint-disable camelcase */
import React from 'react';
//  @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
//  core components
import Button from '@material-ui/core/Button';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
//  import doctorAPI from 'lib/api/doctor';
//  import { extractErrorMsg } from 'lib/utils/helpers';
//  import { toast } from 'react-toastify';
import AsynchronousSelectMr from 'components/e-clinic/Doctor/AsynchronousSelectMr';
// import FetchTobacoConsumption from 'components/e-clinic/Doctor/DisplayMedRec/FetchTobacoConsumption';
import InputLabel from '@material-ui/core/InputLabel';
//  core components
import GridItem from 'components/Grid/GridItem';
import TextField from 'components/controls/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GridContainer from 'components/Grid/GridContainer';
import MedicalObjects from 'Medical_constants/constants';
// import medRec from 'components/e-clinic/Doctor/medRec';
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
    //  color: theme.palette.text.secondary,
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

export default function DisplayMedicalRecord() {
  const classes = useStyles();
  const SkinProblems = [
    {
      value: '',
      label: 'None',
    },
    {
      value: 'skin infection',
      label: 'skin infection',
    },
  ];
  //  ----ophtamology
  const OPHTALMOLOGYPROBLEMS = [
    {
      value: '',
      label: 'None',
    },
    {
      value: 'tearing',
      label: 'tearing',
    },
    {
      value: 'pain',
      label: 'pain',
    },
    {
      value: 'eye spots',
      label: 'eye spots',
    },
  ];
  //  orl
  const ORLPROBLEMS = [
    {
      value: '',
      label: 'None',
    },
    {
      value: 'whistling',
      label: 'whistling',
    },
    {
      value: 'repeated tonsillitis',
      label: 'repeated tonsillitis',
    },
    {
      value: 'epistaxis',
      label: 'epistaxis',
    },
    {
      value: 'rhinorrhea',
      label: 'rhinorrhea',
    },
  ];
  //  ---------------------locomotoproblems
  const LOCOMOTORPROLEMS = [
    {
      value: '',
      label: 'None',
    },
    {
      value: 'muscular',
      label: 'muscular',
    },
    {
      value: 'articular',
      label: 'articular',
    },
    {
      value: 'vertebral',
      label: 'vertebral',
    },
    {
      value: 'neurological',
      label: 'neurological',
    },
  ];
  // --------resperatpoir
  const RESPIRATORYPROBLEMS = [
    {
      value: '',
      label: 'None',
    },
    {
      value: 'cough',
      label: 'cough',
    },
    {
      value: 'dyspnea',
      label: 'dyspnea',
    },
    {
      value: 'expectoration',
      label: 'expectoration',
    },
    {
      value: 'chest pain',
      label: 'chest pain',
    },
  ];
  // cardio vascular--------------------
  const CARDIOVASCULARPROBLEMS = [
    {
      value: '',
      label: 'None',
    },
    {
      value: 'palpitations',
      label: 'palpitations',
    },
    {
      value: 'edema pain',
      label: 'edema pain',
    },
    {
      value: 'pain on walk',
      label: 'pain on walk',
    },
    {
      value: 'pain on rest',
      label: 'pain on rest',
    },
    {
      value: 'abdominal pain',
      label: 'abdominal pain',
    },
  ];
  // digestive problems--------------------
  const DIGESTIVEPROBLEMS = [
    {
      value: '',
      label: 'None',
    },
    {
      value: 'appetite problem',
      label: 'appetite problem',
    },
    {
      value: 'transit',
      label: 'transit',
    },
    {
      value: 'stool',
      label: 'stool',
    },

    {
      value: 'rectal bleeding',
      label: 'rectal bleeding',
    },
  ];
  // aptitude--------------------
  const APTITUDE = [
    {
      value: true,
      label: 'apt',
    },
    {
      value: false,
      label: 'inapt',
    },
  ];

  const initialState = {
    patient_data: {
      user: {
        first_name: '',
        last_name: '',
        date_of_birth: '',
      },
      type: '',
      education_level: '',
    },
    smoking: false,
    chewing: false,
    injection: false,
    oldSmoker: false,
    alcohol: false,
    medication_consumption: false,
    smokingNumberUnits: 0,
    chewingNumberUnits: 0,
    injectionNumbernits: 0,
    ageFc: '',
    duration: '',
    medication: '',
    familySituation: '',
    bloodType: '',
    social_number: '',
    patient: '',
    date: '',
    wieght: '',
    height: '',
    hearing_right: '',
    hearing_left: '',
    visual_acuity_with_correction_left: '',
    visual_acuity_with_correction_right: '',
    visual_acuity_without_correction_left: '',
    visual_acuity_without_correction_right: '',
    skin_state: '',
    skin_exam: '',
    ophtalmological_state: '',
    ophtalmological_exam: '',
    respiratory_state: '',
    respiratory_exam: '',
    cardiovascular_state: '',
    cardiovascular_exam: '',
    digestive_state: '',
    digestive_exam: '',
    aptitude: '',
    reason: '',
    orl_state: '',
    orl_exam: '',
    locomotor_case: '',
    locomotor_exam: '',
  };
  const [values, setvalues] = React.useState({
    ...initialState,
  });
  const [historyvalues, setHistoryvalues] = React.useState({
    smokingNumberUnits: 0,
    chewingNumberUnits: 0,
    injectionNumbernits: 0,
    ageFc: '',
    duration: '',
    medication: '',
  });
  const [edited_values, setEdited] = React.useState({
    ...initialState,
  });
  const handleChangeChecked = (event) => {
    if (event?.target) {
      setvalues({
        ...values,
        [event.target.name]: event.target.checked,
      });
      setEdited({
        ...edited_values,
        [event.target.name]: event.target.checked,
      });
    }
  };
  const [keyForm, setkey] = React.useState(false); //  when i click cancel : state change so all components on the form will re_render

  const handlePatientChange = (event, selectedValue) => {
    setvalues(selectedValue);
    setEdited(selectedValue);
  };
  const handleChange = (event) => {
    if (event?.target) {
      setHistoryvalues({
        ...historyvalues,
        [event.target.name]: event.target.value,
      });
      setEdited({
        ...edited_values,
        [event.target.name]: event.target.value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: resData, status } = await doctorAPI.editMedicalRecord(
      values.id,
      edited_values,
    );
    if (status < 200 || status > 299) {
      const errors = extractErrorMsg(resData);
      errors.map((error) => toast.error(error));
    } else {
      setvalues(resData);
      setEdited(resData);
      //  setinitial(initialState);
      toast.success('Medical Record updated successfully!');
    }
  };

  const cancel = () => {
    setkey(!keyForm);
    setEdited(values);
  };
  //  const handleChange = (event) => {
  //    if (event?.target) {
  //      setinitial({
  //        ...initial_values,
  //        [event.target.name]: event.target.value,
  //      });
  //      setEdited({
  //        ...edited_values,
  //        [event.target.name]: event.target.value,
  //      });
  //    }
  //  };

  return (
    <div>
      <form key={keyForm}>
        <GridContainer>
          <Card>
            <CardHeader color="info">
              <h3>Dislplay Medical Record</h3>
            </CardHeader>
            <CardBody>
              <br />
              <GridContainer>
                <GridItem xs={12}>
                  <AsynchronousSelectMr
                    patient={values}
                    handleChange={handlePatientChange}
                  />
                </GridItem>
              </GridContainer>
              <h2>
                <strong>Patient&apos;s informations</strong>
              </h2>
              <GridContainer>
                <GridItem>
                  <h4>
                    <strong>Last name : </strong>{' '}
                    {values?.patient_data.user.last_name}
                  </h4>
                  <h4>
                    <strong>First name : </strong>{' '}
                    {values?.patient_data.user.first_name}
                  </h4>
                  <h4>
                    <strong>University name : </strong> Higher School of
                    Computer Science 08 May 1945 - Sidi Bel Abbes
                  </h4>
                  <h4>
                    <strong>Date of birth : </strong>
                    {values?.patient_data.user.date_of_birth}
                  </h4>
                  <h4>
                    <strong>Level : </strong>{' '}
                    {`${values?.patient_data.type}(${values?.patient_data.education_level})`}
                  </h4>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      {`Blood Type: ${values?.bloodType}`}
                    </InputLabel>
                    <Select
                      name="bloodType"
                      value={edited_values?.bloodType}
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
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      {`Family situation: ${values?.familySituation}`}
                    </InputLabel>
                    <Select
                      name="familySituation"
                      value={edited_values?.familySituation}
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
                    label={`Social number : ${values?.social_number}`}
                    value={edited_values?.social_number}
                    name="social_number"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <h2>
                <strong>Personal history</strong>
              </h2>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={edited_values?.smoking}
                        onChange={handleChangeChecked}
                        name="smoking"
                        color="primary"
                      />
                    }
                    label="Smoking"
                  />
                </GridItem>
              </GridContainer>
              <br />
              {edited_values?.smoking && (
                <GridContainer>
                  <GridItem xs={6} sm={3}>
                    <TextField
                      name="smokingNumberUnits"
                      label={`Number units :   ${values?.smokingNumberUnits}
                    `}
                      value={edited_values?.smokingNumberUnits}
                      onChange={handleChange}
                      // value={values.number_units}
                      fullwidth
                    />
                  </GridItem>
                  <GridItem xs={6} sm={3}>
                    <TextField
                      label={`Age of first cigarette : ${values?.ageFc}`}
                      name="ageFc"
                      value={edited_values?.ageFc}
                      onChange={handleChange}
                      // value={values.number_units}
                      fullwidth
                    />
                  </GridItem>
                  <GridItem xs={6} sm={3}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={edited_values?.oldSmoker}
                          onChange={handleChangeChecked}
                          name="oldSmoker"
                          color="primary"
                        />
                      }
                      label="Old smoker"
                    />
                  </GridItem>
                  <GridItem xs={6} sm={3}>
                    <TextField
                      name="duration"
                      label={`Duration : ${values?.duration}`}
                      value={edited_values?.duration}
                      onChange={handleChange}
                      // value={values.number_units}
                      fullwidth
                    />
                  </GridItem>
                </GridContainer>
              )}
              <br />
              <GridContainer>
                <GridItem xs={6} sm={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={edited_values?.chewing}
                        onChange={handleChangeChecked}
                        name="chewing"
                        color="primary"
                      />
                    }
                    label="Chewing"
                  />
                </GridItem>
                {edited_values?.chewing && (
                  <GridItem xs={6} sm={3}>
                    <TextField
                      name="chewingNumberUnits"
                      label={`Number Units :  ${values?.chewingNumberUnits}`}
                      value={edited_values?.chewingNumberUnits}
                      onChange={handleChange}
                      type="number"
                      // value={values.number_units}
                      fullwidth
                    />
                  </GridItem>
                )}
              </GridContainer>
              <br />
              <GridContainer>
                <GridItem xs={6} sm={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={edited_values?.injection}
                        onChange={handleChangeChecked}
                        name="injection"
                        color="primary"
                      />
                    }
                    label="Injection"
                  />
                </GridItem>
                {edited_values?.injection && (
                  <GridItem xs={6} sm={3}>
                    <TextField
                      name="injectionNumbernits"
                      label={`number Units : ${values?.injectionNumbernits}`}
                      value={edited_values?.injectionNumbernits}
                      onChange={handleChange}
                      type="number"
                      // value={values.number_units}
                      fullwidth
                    />
                  </GridItem>
                )}
              </GridContainer>
              <br />
              <GridContainer>
                <GridItem xs={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={edited_values?.alcohol}
                        onChange={handleChangeChecked}
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
                        checked={edited_values?.medication_consumption}
                        onChange={handleChangeChecked}
                        name="medication_consumption"
                        color="primary"
                      />
                    }
                    label="Medication"
                  />
                </GridItem>
                {edited_values?.medication_consumption && (
                  <GridItem xs={3}>
                    <TextField
                      name="medication"
                      label={`Medication name : ${values?.medication}`}
                      value={edited_values?.medication}
                      onChange={handleChange}
                      // value={values.number_units}
                      fullwidth
                    />
                  </GridItem>
                )}
              </GridContainer>
              <h2>
                <strong>Screening visit</strong>
              </h2>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id="outlined-basic"
                    label={`Weight : ${values?.wieght}`}
                    variant="outlined"
                    type="number"
                    name="wieght"
                    onChange={handleChange}
                    value={edited_values?.wieght}
                    required
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id="outlined-basic"
                    label={`Height : ${values?.height}`}
                    variant="outlined"
                    type="number"
                    name="height"
                    value={edited_values?.height}
                    onChange={handleChange}
                    required
                    fullWidth
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
                    name="hearing_right"
                    label={`Hearing right : ${values?.hearing_right}`}
                    value={edited_values?.hearing_right}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    // value={values.hearing_right}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    name="hearing_left"
                    label={`Hearing left : ${values?.hearing_left}`}
                    value={edited_values?.hearing_left}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    // value={values.hearing_left}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <hr />
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
                    name="visual_acuity_with_correction_left"
                    label={`Visual acuity with correction left
                      ${values?.visual_acuity_with_correction_left}`}
                    value={edited_values?.visual_acuity_with_correction_left}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    name="visual_acuity_with_correction_right"
                    label={`Visual acuity with correction right 
                      ${values?.visual_acuity_with_correction_right}`}
                    value={edited_values?.visual_acuity_with_correction_right}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    name="visual_acuity_without_correction_left"
                    label={`Visual acuity without correction left 
                      ${values?.visual_acuity_without_correction_left}`}
                    value={edited_values?.visual_acuity_without_correction_left}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    name="visual_acuity_without_correction_right"
                    label={`Visual acuity without correction right 
                      ${values?.visual_acuity_without_correction_right}`}
                    value={
                      edited_values?.visual_acuity_without_correction_right
                    }
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <hr />
              <GridContainer>
                <GridItem>
                  <h4>
                    <strong>Skin,Orl,Cardiovascular problems....</strong>
                  </h4>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Skin problems : {values?.skin_state}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      name="skin_state"
                      value={edited_values?.skin_state}
                      onChange={handleChange}
                      label="Age"
                    >
                      {SkinProblems.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label={`Skin exam: ${values?.skin_exam}`}
                    value={edited_values?.skin_exam}
                    name="skin_exam"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Ophtalmology: {values?.ophtalmological_state}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      name="ophtalmological_state"
                      value={edited_values?.ophtalmological_state}
                      // value={values.ophtalmological_state}
                      onChange={handleChange}
                    >
                      {OPHTALMOLOGYPROBLEMS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label={`Ophtalmology exam ${values?.ophtalmological_exam}`}
                    value={edited_values?.ophtalmological_exam}
                    name="ophtalmological_exam"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Orl: {values?.orl_state}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      value={edited_values?.orl_state}
                      name="orl_state"
                      onChange={handleChange}
                    >
                      {ORLPROBLEMS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label={`Orl exam ${values?.orl_exam}`}
                    value={edited_values?.orl_exam}
                    name="orl_exam"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Locomoto : {values?.locomotor_case}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      name="locomotor_case"
                      value={edited_values?.locomotor_case}
                      // value={values.locomotor_case}
                      onChange={handleChange}
                    >
                      {LOCOMOTORPROLEMS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label={`locomotor exam ${values?.locomotor_exam}`}
                    value={edited_values?.locomotor_exam}
                    name="locomotor_exam"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Cardiovascular : {values?.cardiovascular_state}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      name="cardiovascular_state"
                      value={edited_values?.cardiovascular_state}
                      // value={values.cardiovascular_state}
                      onChange={handleChange}
                    >
                      {CARDIOVASCULARPROBLEMS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label={`Cardiovascular exam 
                      ${values?.cardiovascular_exam}`}
                    value={edited_values?.cardiovascular_exam}
                    name="cardiovascular_exam"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Respiratory : {values?.respiratory_state}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      name="respiratory_state"
                      value={edited_values?.respiratory_state}
                      // value={values.respiratory_state}
                      onChange={handleChange}
                    >
                      {RESPIRATORYPROBLEMS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label={`Respiratory exam ${values?.respiratory_exam}`}
                    value={edited_values?.respiratory_exam}
                    name="respiratory_exam"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Digestive: {values?.digestive_state}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      name="digestive_state"
                      value={edited_values?.digestive_state}
                      onChange={handleChange}
                    >
                      {DIGESTIVEPROBLEMS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label={`Digestive exam ${values?.digestive_exam}`}
                    name="digestive_exam"
                    value={edited_values?.digestive_exam}
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Aptitude: {values?.aptitude ? 'apt' : 'inapt'}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      name="aptitude"
                      value={edited_values?.aptitude}
                      onChange={handleChange}
                    >
                      {APTITUDE.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label={`Reason ${values?.reason}`}
                    value={edited_values?.reason}
                    name="reason"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <br />
            <div className={classes.btnDiv}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.btn}
                onClick={handleSubmit}
                type="submit"
              >
                Update
              </Button>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.btn}
                onClick={cancel}
              >
                Cancel
              </Button>
            </div>
            <CardFooter />
          </Card>
        </GridContainer>
      </form>
    </div>
  );
}
