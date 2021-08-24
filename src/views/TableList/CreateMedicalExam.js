import React from "react";
import ClinicalExamination from "components/ClinicalExamination";
import AsynchronousSelectMr from "../../components/AsynchronousSelectMr";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ParaClinicalExamination from "components/ParaClinicalExamination";
import Orientation from "components/Orientation";
import OrientationPdf from "components/OrientationPdf";
import Evacuation from "components/Evacuation";
import Certificate from "components/Certificate";
import Ordonance from "components/Ordonance";
import MedicamentUse from "components/MedicamentUse"
export default function CreateMedicalExam() {
  const initialState = {
    first_name: "",
    last_name: "",
    type: "",
    education_level: "",
    patient: "",
    date_of_birth: "",
  };
  const [patient, setPatient] = React.useState({
    ...initialState,
  });
  const handlePatientChange = (event, selectedValue) => {
    setPatient({
      ...patient,
      patient: selectedValue.patient_data.pid,
      first_name: selectedValue.patient_data.user.first_name,
      last_name: selectedValue.patient_data.user.last_name,
      education_level: selectedValue.patient_data.education_level,
      type: selectedValue.patient_data.type,
    });
  };
  return (
    <div>
      <GridContainer>
        <Card>
          <CardBody>
             {/* <AsynchronousSelectMr
              patient={patient.attribute}
              handleChange={handlePatientChange}
            />
            <ClinicalExamination patient={patient} /> 
             <ParaClinicalExamination />  
             <Orientation patient={patient}/>  
             <Evacuation patient={patient}/>
             <Certificate patient={patient}/> */}
              <Ordonance patient={patient}/> 
          </CardBody>
        </Card>
      </GridContainer>
    </div>
  );
}
