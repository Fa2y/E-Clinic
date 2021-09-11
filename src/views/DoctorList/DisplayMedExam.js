import FetchCertificate from 'components/e-clinic/Doctor/DisplayMedExm/FetchCertificate';
import FetchClinicalExam from 'components/e-clinic/Doctor/DisplayMedExm/FetchClinicalExam';
import FetchEvacuation from 'components/e-clinic/Doctor/DisplayMedExm/FetchEvacuation';
import FetchOrdonance from 'components/e-clinic/Doctor/DisplayMedExm/FetchOrdonance';
import FetchOrientation from 'components/e-clinic/Doctor/DisplayMedExm/FetchOrientation';
import React from 'react';

export default function DisplayMedExam() {
  return (
    <div>
      <FetchClinicalExam />
      <br />
      <FetchOrientation />
      <br />
      <FetchEvacuation />
      <br />
      <FetchCertificate />
      <br />
      <FetchOrdonance />
    </div>
  );
}
