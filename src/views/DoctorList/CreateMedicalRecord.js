import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import Button from '@material-ui/core/Button';

// core componnenets for Medical Record
import PatientInfo from 'components/e-clinic/Doctor/patientInfo';
import TobacoConsumption from 'components/e-clinic/Doctor/TobacoConsumption';
import MedicalRecordDetails from 'components/e-clinic/Doctor/MedicalRecordDetails';

const useStyles = makeStyles(() => ({
  btnDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    margin: 4,
  },
}));

export default function CreateMedicalRecord() {
  const classes = useStyles();
  const initialState = {
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
  const [values, setValues] = React.useState(initialState);
  const handleCancel = (e) => {
    e.preventDefault();
    setValues(initialState);
  };

  return (
    <div>
      <GridContainer>
        <Card>
          <CardBody>
            <GridContainer>
              <GridItem>
                <h2>
                  <strong>Patient&apos;s informations</strong>
                </h2>
              </GridItem>
            </GridContainer>
            <PatientInfo
              handleClick={(value, name) =>
                setValues({
                  ...values,
                  [name]: value,
                })
              }
            />
            <GridContainer>
              <GridItem>
                <h2>
                  <strong>Personal history</strong>
                </h2>
              </GridItem>
            </GridContainer>
            <TobacoConsumption
              handleClick={(value, name) =>
                setValues({
                  ...values,
                  [name]: value,
                })
              }
            />
            <GridContainer>
              <GridItem>
                <h2>
                  <strong>Screening visit</strong>
                </h2>
              </GridItem>
            </GridContainer>
            <MedicalRecordDetails
              handleClick={(value, name) =>
                setValues({
                  ...values,
                  [name]: value,
                })
              }
            />
            <br />
            <div className={classes.btnDiv}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.btn}
                type="submit"
              >
                Create
              </Button>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleCancel}
                className={classes.btn}
                type="submit"
              >
                Cancel
              </Button>
            </div>
          </CardBody>
          <CardFooter />
        </Card>
      </GridContainer>
    </div>
  );
}
