import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import avatar from "assets/img/faces/marc.jpg";
import InputAdornment from '@material-ui/core/InputAdornment';
import useSWR from "swr";
import { patientAPI } from "../../lib/api/admin";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function MedicalExam() {
  const classes = useStyles();
  const [patients, setPatients] = useState([]);
  const { data: pData, error: pErr } = useSWR([""], patientAPI.fetchPatients);
  /*useEffect(() => {
    if (!pErr && pData) {
      const data = JSON.parse(pData)?.data
        .filter((patient) => !patient.is_approved)
        .map((patient) => {
          return [
            patient.user.first_name,
            patient.user.last_name,
            patient.user.email,
            patient.user.date_joined,
            `${patient.type} : ${patient.education_level}`,
            patient.pid,
          ];
        });
      setPatients(data);
    } else {
      //Show error
    }
  }, [pData, pErr]);*/
  //select fields const-----------------------
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'houssem',
      label: 'houssem',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
   const  tobaco_consumption = [
    {
      value: 'true',
      label: 'Yes',
    },
    {  
      value: 'false',
      label: 'No',
    },
  ];
  const  PRODUCT = [
    {
      value: 'smoking tobaco',
      label: 'smoking tobaco',
    },
    {  
      value: 'chewing tobaco',
      label: 'chewing tobaco',
    },
    {  
      value: 'injection tobaco',
      label: 'injection tobaco',
    },
  ];
 
  const [currency, setCurrency] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleChange = (event) => {
    setCurrency(event.target.value);
    setSelectedDate(date);
  };
  return (
    <div>
      <GridContainer>
          <Card>
            <CardBody>
            <TextField
          id="standard-select-currency"
          select
          variant="outlined"
          value={currency}
          fullWidth
          onChange={handleChange}
          helperText="Please select your patient"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br></br>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <TextField
          id="social_number"
          variant="outlined"
          placeholder="Social_number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <TextField
          id="biometric"
          placeholder="Biometric"
          InputLabelProps={{
            shrink: true,
          }}
        />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={4}>
                  <br></br>
                <TextField
          id="tobaco_consumption"
          select
          defaultValue="default"
          value={tobaco_consumption}
          onChange={handleChange}
          helperText="Please select tobaco consumption"

        >
          <MenuItem value="default" disabled>
            Tobaco consumption
            </MenuItem>
          {tobaco_consumption.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <br></br>
                <TextField
          id="tobaco_taken_as"
          select
          value={PRODUCT}
          onChange={handleChange}
          helperText="Please select tobaco product"
        >
          {PRODUCT.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <br></br>
                <TextField
          id="number_units"
          placeholder="Number_units"
          InputLabelProps={{
            shrink: true,
          }}
        />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                  <br></br>
                <TextField
          id="alcohol_consumption"
          select
          value={tobaco_consumption}
          onChange={handleChange}
          helperText="Please select alcohol consumption"
        >
          {tobaco_consumption.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                  <br></br>
                <TextField
          id="medication_consumption"
          select
          value={tobaco_consumption}
          onChange={handleChange}
          helperText="Please select medication consumption"
        >
          {tobaco_consumption.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Medications"
                    id="medications"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
              <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="General diseases"
                    id="general_diseases"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Surgical intervention"
                    id="surgical_intervention"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
              <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Congenital condition"
                    id="congenital_condition"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Allergic reaction"
                    id="allergic_reaction"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              
             
              
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
      </GridContainer>
    </div>
  );
}
