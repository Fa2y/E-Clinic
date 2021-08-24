/* eslint-disable camelcase */
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import Button from '@material-ui/core/Button';
import Card from 'components/Card/Card';

import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import TextField from 'components/controls/Input';
import SelectField from 'components/controls/SelectField';
import MedicalObjects from 'Medical_constants/constants';
import doctorAPI from 'lib/api/doctor';
import { extractErrorMsg } from 'lib/utils/helpers';
import { toast } from 'react-toastify';
import AsynchronousSelectMr from 'components/e-clinic/Doctor/AsynchronousSelectMr';

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
}));

export default function FetchMedicalRecord() {
  const classes = useStyles();

  const initialState = {
    patient_data: {
      user: {
        first_name: '',
        last_name: '',
      },
      type: '',
      education_level: '',
    },
    patient: '',
    social_number: '',
    biometric: '',
    tobaco_consumption: '',
    tobaco_taken_as: '',
    number_units: '',
    alcohol_consumption: '',
    medication_consumption: '',
    medications: '',
    general_diseases: '',
    surgical_intervention: '',
    allergic_reaction: '',
    congenital_condition: '',
  };
  const [keyForm, setkey] = React.useState(0); // when i click cancel : state change so all components on the form will re_render
  const [values, setValues] = React.useState({
    ...initialState,
  });

  const [edited_values, setEdited] = React.useState();
  const [initial_values, setinitial] = React.useState({
    ...initialState,
  });
  const handlePatientChange = (event, selectedValue) => {
    setValues(selectedValue);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: resData, status } = await doctorAPI.editMedicalRecord(
      values?.id,
      edited_values,
    );
    if (status < 200 || status > 299) {
      const errors = extractErrorMsg(resData);
      errors.map((error) => toast.error(error));
    } else {
      setValues(resData);
      setEdited({});
      setinitial(initialState);
      toast.success('Medical Record updated successfully!');
    }
  };

  const cancel = () => {
    setkey({
      keyForm: keyForm + 1,
    });
    setValues({
      ...initialState,
    });
  };
  const handleChange = (event) => {
    if (event?.target) {
      setinitial({
        ...initial_values,
        [event.target.name]: event.target.value,
      });
      setEdited({
        ...edited_values,
        [event.target.name]: event.target.value,
      });
    }
  };

  const response = (value) => (value ? 'Yes' : 'No');

  return (
    <div>
      <form key={keyForm}>
        <GridContainer>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12}>
                  <AsynchronousSelectMr
                    patient={values}
                    handleChange={handlePatientChange}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    variant="filled"
                    disabled
                    label={`Social number : ${values?.social_number}`}
                    fullWidth
                    type="number"
                  />
                </GridItem>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    name="social_number"
                    variant="outlined"
                    label="Social number: "
                    fullWidth
                    type="number"
                    onChange={handleChange}
                    value={initial_values?.social_number}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    name="biometric"
                    variant="filled"
                    disabled
                    label={`Biometric: ${values?.biometric}`}
                    fullWidth
                    type="number"
                  />
                </GridItem>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    name="biometric"
                    variant="outlined"
                    label="Biometric : "
                    fullWidth
                    type="number"
                    onChange={handleChange}
                    value={initial_values?.biometric}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer />
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    variant="filled"
                    disabled
                    label={`Medication: ${values?.medications}`}
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    label="Medications"
                    name="medications"
                    fullWidth
                    onChange={handleChange}
                    value={initial_values?.medications}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    variant="filled"
                    disabled
                    label={`General diseases: ${values?.general_diseases}`}
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    label="General diseases"
                    name="general_diseases"
                    fullWidth
                    onChange={handleChange}
                    value={initial_values?.general_diseases}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    variant="filled"
                    disabled
                    label={`Surgical intervention: 
                      ${response(values?.surgical_intervention)}`}
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    label="Surgical intervention"
                    name="surgical_intervention"
                    fullWidth
                    onChange={handleChange}
                    value={initial_values?.surgical_intervention}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    variant="filled"
                    disabled
                    label={`Congenital condition: ${values?.congenital_condition}`}
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    label="Congenital condition"
                    name="congenital_condition"
                    fullWidth
                    onChange={handleChange}
                    value={initial_values?.congenital_condition}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    variant="filled"
                    disabled
                    label={`Allergic reaction: ${values?.allergic_reaction}`}
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    label="Allergic reaction"
                    name="allergic_reaction"
                    fullWidth
                    onChange={handleChange}
                    value={initial_values?.allergic_reaction}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    variant="filled"
                    disabled
                    label={`Medication consumption: 
                      ${response(values?.medication_consumption)}`}
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <SelectField
                    name="medication_consumption"
                    label="Medication consumption"
                    options={MedicalObjects.tobaco_consumption}
                    onChange={handleChange}
                    value={initial_values?.medication_consumption}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    variant="filled"
                    disabled
                    label={`Tobaco consumption: ${response(
                      values?.tobaco_consumption,
                    )}`}
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <SelectField
                    name="tobaco_consumption"
                    label="Tobaco consumption"
                    onChange={handleChange}
                    value={initial_values?.tobaco_consumption}
                    options={MedicalObjects.tobaco_consumption}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    variant="filled"
                    disabled
                    label={`Tobaco product: ${values?.tobaco_taken_as}`}
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={6} sm={12} md={6}>
                  <SelectField
                    name="tobaco_consumption"
                    onChange={handleChange}
                    label="Tobaco consumption"
                    value={initial_values?.tobaco_consumption}
                    options={MedicalObjects.PRODUCT}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    variant="filled"
                    disabled
                    label={`Number units: ${values?.number_units}`}
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    name="number_units"
                    label="Number units"
                    onChange={handleChange}
                    value={initial_values?.number_units}
                    fullwidth
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <TextField
                    variant="filled"
                    disabled
                    label={`Alcohol consumption: ${response(
                      values?.alcohol_consumption,
                    )}`}
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <SelectField
                    name="alcohol_consumption"
                    label="Alcohol consumption"
                    onChange={handleChange}
                    value={initial_values?.tobaco_consumption}
                    options={MedicalObjects.tobaco_consumption}
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
                type="submit"
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
