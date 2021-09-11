import React from 'react';
import GridContainer from 'components/Grid/GridContainer';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

// core Components for Medical Exam
import AsynchronousSelectMr from 'components/e-clinic/Doctor/AsynchronousSelectMr';
import ClinicalExamination from 'components/e-clinic/Doctor/ClinicalExamination';
import ParaClinicalExamination from 'components/e-clinic/Doctor/ParaClinicalExamination';
import Orientation from 'components/e-clinic/Doctor/Orientation';
import Evacuation from 'components/e-clinic/Doctor/Evacuation';
import Certificate from 'components/e-clinic/Doctor/Certificate';
import MedOrdonance from 'components/e-clinic/Doctor/MedOrdonance';

export default function CreateMedicalExam() {
  const initialState = {
    first_name: '',
    last_name: '',
    type: '',
    education_level: '',
    patient: '',
    date_of_birth: '',
  };
  const [patient, setPatient] = React.useState({
    ...initialState,
  });
  const [showExams, setShowExams] = React.useState(false);
  const [showBtn, setShowBtn] = React.useState(false);
  const handlePatientChange = (event, selectedValue) => {
    setPatient({
      ...patient,
      patient: selectedValue?.patient_data.pid,
      first_name: selectedValue?.patient_data.user.first_name,
      last_name: selectedValue?.patient_data.user.last_name,
      date_of_birth: selectedValue?.patient_data.user.date_of_birth,
      education_level: selectedValue?.patient_data.education_level,
      type: selectedValue?.patient_data.type,
    });
    setShowBtn(!showBtn);
    setShowExams(false);
  };
  const newExam = () => {
    setShowExams(true);
    setShowBtn(false);
  };
  return (
    <div>
      <GridContainer>
        <Card>
          <CardBody>
            <AsynchronousSelectMr
              patient={patient.attribute}
              handleChange={handlePatientChange}
            />
            <br />
            <div style={{ display: showBtn ? 'inline' : 'none' }}>
              <Button
                style={{ marginLeft: '30%' }}
                variant="contained"
                color="secondary"
                size="large"
                onClick={newExam}
              >
                <bold>CREATE NEW MEDICAL EXAM</bold>
              </Button>
            </div>
            <div style={{ display: showExams ? 'inline' : 'none' }}>
              <Grid
                style={{
                  marginTop: '1%',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
                container
                justifyContent="center"
                spacing={2}
              >
                <Grid item>
                  <ClinicalExamination patient={patient} />
                </Grid>
                <Grid item>
                  <ParaClinicalExamination />
                </Grid>
                <Grid item>
                  <Orientation patient={patient} />
                </Grid>
                <Grid item>
                  <Evacuation patient={patient} />
                </Grid>
                <Grid item>
                  <Certificate patient={patient} />
                </Grid>
                <Grid item>
                  <MedOrdonance patient={patient} />
                </Grid>
              </Grid>
            </div>
          </CardBody>
        </Card>
      </GridContainer>
    </div>
  );
}
