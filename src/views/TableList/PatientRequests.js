import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import useSWR from "swr";
import { patientAPI } from "../../lib/api/admin";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
   const [patients, setPatients] = useState([]);

  const {
    data: pData,
    error: pErr,
  } = useSWR([""],patientAPI.fetchPatients);
  
  useEffect(()=>{
    if(!pErr && pData){
      setPatients([]);
      const data = patients.concat(
      pData?.data.map((patient) => {
        return [patient.user.first_name,patient.user.last_name,patient.user.email,patient.user.date_joined,`${patient.type} : ${patient.education_level}`]
      })
      );
      setPatients(data);
  }else{
    //Show error
  }},[pData,pErr])
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Liste des comptes créés</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nom", "Prenom", "Email", "Date", "Niveau","Operations"]}
              tableData={
                patients ? patients.map((patient)=>{
                  return (patient.concat(
                  <div>
                    <Button color="success" >
                      Accepter
                    </Button>
                    <Button color="danger" >
                      Refuser
                    </Button>
                  </div>))
                }
                ):[]
               
              
            }
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
      </GridItem>
    </GridContainer>
  );
}
