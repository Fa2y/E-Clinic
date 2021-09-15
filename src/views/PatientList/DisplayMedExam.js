import React from 'react';
import FetchCertificate from 'components/e-clinic/Doctor/DisplayMedExm/FetchCertificate';
import FetchClinicalExam from 'components/e-clinic/Doctor/DisplayMedExm/FetchClinicalExam';
import FetchEvacuation from 'components/e-clinic/Doctor/DisplayMedExm/FetchEvacuation';
import FetchOrdonance from 'components/e-clinic/Doctor/DisplayMedExm/FetchOrdonance';
import FetchOrientation from 'components/e-clinic/Doctor/DisplayMedExm/FetchOrientation';
import AsynchronousSelectMedicalExamPatient from 'components/e-clinic/Doctor/AsynchronousMedicalExamPatient';

import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import moment from 'moment';

export default function DisplayMedExam() {
  const [values, setvalues] = React.useState({});
  const handleValuesChange = (event, selectedValue) => {
    setvalues(selectedValue);
  };
  return (
    <div>
      <Card>
        <CardHeader color="success">
          <h3>Dislplay Medical Exam</h3>
        </CardHeader>
        <CardBody>
          <br />
          <GridContainer>
            <GridItem xs={12}>
              <AsynchronousSelectMedicalExamPatient
                patient={values}
                handleChange={handleValuesChange}
              />
            </GridItem>
          </GridContainer>
          {values?.patient_data && (
            <GridContainer>
              <GridItem>
                <h2>
                  <strong>Patient&apos;s informations</strong>
                </h2>
                <h4>
                  <strong>Last name: </strong>{' '}
                  {values?.patient_data?.user?.last_name}
                </h4>
                <h4>
                  <strong>First name: </strong>{' '}
                  {values?.patient_data?.user?.first_name}
                </h4>
                <h4>
                  <strong>University name: </strong> Higher School of Computer
                  Science 08 May 1945 - Sidi Bel Abbes
                </h4>
                <h4>
                  <strong>Date of birth: </strong>
                  {values?.patient_data?.user?.date_of_birth}
                </h4>
                <h4>
                  <strong>Level: </strong>{' '}
                  {values?.patient_data &&
                    `${values?.patient_data?.type}(${values?.patient_data?.education_level})`}
                </h4>
                <h4>
                  <strong>Clinical Exam Done by: </strong>
                  {`Dr.${values?.doctor_data?.last_name} ${values?.doctor_data?.first_name}`}
                </h4>
                <h4>
                  <strong>Clinical Exam Date: </strong>
                  {moment(values?.date).format('YYYY MMMM Do')}
                </h4>
              </GridItem>
            </GridContainer>
          )}
        </CardBody>
      </Card>
      <br />
      {(values?.clinical_exam || values?.paraclinical_exam) && (
        <FetchClinicalExam values={values} />
      )}
      <br />
      {values?.orientation && <FetchOrientation values={values} />}
      <br />
      {values?.evacuation && <FetchEvacuation values={values} />}
      <br />
      {values?.medical_certificate && <FetchCertificate values={values} />}
      <br />
      {values?.ordanance && values?.ordanance?.length !== 0 && (
        <FetchOrdonance values={values} />
      )}
    </div>
  );
}
