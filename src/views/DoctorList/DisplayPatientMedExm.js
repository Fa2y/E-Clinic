import FetchCertificate from 'components/e-clinic/Doctor/DisplayMedExm/FetchCertificate';
import FetchClinicalExam from 'components/e-clinic/Doctor/DisplayMedExm/FetchClinicalExam';
import FetchEvacuation from 'components/e-clinic/Doctor/DisplayMedExm/FetchEvacuation';
import FetchOrdonance from 'components/e-clinic/Doctor/DisplayMedExm/FetchOrdonance';
import FetchOrientation from 'components/e-clinic/Doctor/DisplayMedExm/FetchOrientation';
import React from 'react';

export default function DisplayPatientMedExam() {
  return (
    <div>
      <FetchClinicalExam />
      <br></br>
      <FetchOrientation />
      <br></br>
      <FetchEvacuation />
      <br></br>
      <FetchCertificate />
      <br></br>
      <FetchOrdonance />
    </div>
  );
}
