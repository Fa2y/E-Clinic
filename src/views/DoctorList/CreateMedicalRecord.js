import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import Button from '@material-ui/core/Button';
import CardHeader from 'components/Card/CardHeader';
import doctorAPI from 'lib/api/doctor';
import { extractErrorMsg } from 'lib/utils/helpers';
import { toast } from 'react-toastify';
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
  // today
  const today = new Date();
  const todayDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  //------------------
  const initialState = {
    patient_data: {
      user: {
        first_name: '',
        last_name: '',
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
    date: todayDate,
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
  const [keyForm, setkey] = React.useState(0); // when i click cancel : state change so all components on the form will re_render

  const cancel = () => {
    setkey({
      keyForm: keyForm + 1,
    });
    setValues(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reshape the object to send
    // eslint-disable-next-line camelcase
    const { patient_data, ...data } = values;
    const { data: resData, status } = await doctorAPI.createMedicalRecord({
      ...data,
      patient: patient_data?.pid,
    });
    if (status < 200 || status > 299) {
      const errors = extractErrorMsg(resData);
      errors.map((error) => toast.error(error));
    } else {
      toast.success('Medical Record created successfully!');
    }
  };
  return (
    <div>
      <form key={keyForm}>
        <GridContainer>
          <Card>
            <CardBody>
              <CardHeader color="info">
                <h3>Create Medical Record</h3>
              </CardHeader>
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
                  onClick={handleSubmit}
                  type="submit"
                >
                  Create
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={cancel}
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
      </form>
    </div>
  );
}
