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

// Api
import doctorAPI from 'lib/api/doctor';
import { toast } from 'react-toastify';
import { extractErrorMsg } from 'lib/utils/helpers';

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
  const [medicalExamId, setMedicalExamId] = React.useState('');
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
  const newExam = async () => {
    const { data, status } = await doctorAPI.createMedicalExam({
      patient: patient?.patient,
    });
    if (status < 200 || status > 299) {
      const errors = extractErrorMsg(data);
      errors.map((error) => toast.error(error));
      return [];
    }
    toast.info('Exam Created Successfully, proceed with filling data');
    setMedicalExamId(data?.id);
    setShowExams(true);
    setShowBtn(false);
    return true;
  };
  const CreateDetail = async (part, detailData) => {
    const { data, status } = await doctorAPI.addMedicalExamDetails(
      medicalExamId,
      part,
      detailData,
    );
    if (status < 200 || status > 299) {
      const errors = extractErrorMsg(data);
      errors?.map((error) => toast.error(error));
      return [];
    }
    toast.info('Detail Added, proceed with filling data');
    return true;
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
                  <ClinicalExamination
                    patient={patient}
                    CreateDetail={(data) => CreateDetail('clinical_exam', data)}
                  />
                </Grid>
                <Grid item>
                  <ParaClinicalExamination
                    CreateDetail={(data) =>
                      CreateDetail('paraclinical_exam', data)
                    }
                  />
                </Grid>
                <Grid item>
                  <Orientation
                    patient={patient}
                    CreateDetail={(data) => CreateDetail('orientation', data)}
                  />
                </Grid>
                <Grid item>
                  <Evacuation
                    patient={patient}
                    CreateDetail={(data) => CreateDetail('evacuation', data)}
                  />
                </Grid>
                <Grid item>
                  <Certificate
                    patient={patient}
                    CreateDetail={(data) =>
                      CreateDetail('medical_certificate', data)
                    }
                  />
                </Grid>
                <Grid item>
                  <MedOrdonance
                    patient={patient}
                    CreateDetail={(data) => CreateDetail('ordanance', data)}
                  />
                </Grid>
              </Grid>
            </div>
          </CardBody>
        </Card>
      </GridContainer>
    </div>
  );
}
