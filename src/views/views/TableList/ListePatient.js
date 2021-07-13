import React, { useState } from 'react'
//@material-ui/core components
import EmployeeForm from "../Employees/EmployeeForm";
import { makeStyles } from "@material-ui/core/styles";
import * as employeeService from "../../services/employeeService";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Controls from "../../components/controls/Controls";
import Popup from "../../components/Popup";
import Data from "./data.json";

//import { CenterFocusStrong } from "@material-ui/icons";

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
  header:{
    direction:"row",
    justify:"space-between",
    alignItems:"center",    
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

export default function ListePatient() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [records, setRecords] = useState(employeeService.getAllEmployees())
  const [openPopup, setOpenPopup] = useState(false)
  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0)
        employeeService.insertEmployee(employee)
    else
        employeeService.updateEmployee(employee)
    resetForm()
    setRecordForEdit(null)
    setOpenPopup(false)
    setRecords(employeeService.getAllEmployees())
}

const openInPopup = item => {
    setRecordForEdit(item)
    setOpenPopup(true)
}
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
          <div className="header">
            <h4 className={classes.cardTitleWhite}>Liste des comptes créés</h4>
            <Button variant="outlined" color="info" startIcon={<AddToPhotosIcon />} onClick={() => { setOpenPopup(true); }}>
              Ajouter utilisateur   
            </Button>
            </div>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nom", "Prenom", "Email","Niveau",<div align="center">Operations </div>]}

              tableData={[
                ["1", "Dakota Rice", "$36,738", "1 ere anne", 
                <div>
                <Button color="success" >
                Activer
              </Button>  
               <Button color="danger" >
                Disactiver
              </Button>
              <Button color="primary" >
                Modifier
              </Button>
              <Button color="warning" >
                Archiver
              </Button>
              </div>],
               
              ]}
            
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
      </GridItem>
      <Popup
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EmployeeForm
                     recordForEdit={recordForEdit}
                     addOrEdit={addOrEdit}
                     />
            </Popup>
    </GridContainer>
    
  );
}
