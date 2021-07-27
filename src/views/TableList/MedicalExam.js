import React from "react";

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
  const SkinProblems = [
    {
      value: 'skin infection',
      label: 'skin infection',
    },
  ];
  //----ophtamology
  const OPHTALMOLOGYPROBLEMS = [
    {
      value: 'tearing',
      label: 'tearing',
    },
    {  
      value: 'pain',
      label: 'pain',
    },
    {
      value: 'eye spots',
      label: 'eye spots',
    }  
  ];
  //orl
  const ORLPROBLEMS = [
    {
      value: 'whistling',
      label: 'whistling',
    },
    {  
      value: 'repeated tonsillitis',
      label: 'repeated tonsillitis',
    },
    {
      value: 'epistaxis',
      label: 'epistaxis',
    }, 
    {
      value: 'rhinorrhea',
      label: 'rhinorrhea',
    }   
  ];
  //---------------------locomotoproblems
  const LOCOMOTORPROLEMS = [
    {
      value: 'muscular',
      label: 'muscular',
    },
    {  
      value: 'articular',
      label: 'articular',
    },
    {
      value: 'vertebral',
      label: 'vertebral',
    }, 
    {
      value: 'neurological',
      label: 'neurological',
    }   
  ];
  //--------resperatpoir
  const  RESPIRATORYPROBLEMS  = [
    {
      value: 'cough',
      label: 'cough',
    },
    {  
      value: 'dyspnea',
      label: 'dyspnea',
    },
    {
      value: 'expectoration',
      label: 'expectoration',
    }, 
    {
      value: 'chest pain',
      label: 'chest pain',
    }   
  ];
  //cardio vascular--------------------
  const  CARDIOVASCULARPROBLEMS  = [
    {
      value: 'palpitations',
      label: 'palpitations',
    },
    {  
      value: 'edema pain',
      label: 'edema pain',
    },
    {
      value: 'pain on walk',
      label: 'pain on walk',
    }, 
    {
      value: 'pain on rest',
      label: 'pain on rest',
    },
    {
      value: 'abdominal pain',
      label: 'abdominal pain',
    }   
  ];
  //digestive problems--------------------
  const  DIGESTIVEPROBLEMS  = [
    {
      value: 'appetite problem',
      label: 'appetite problem',
    },
    {  
      value: 'transit',
      label: 'transit',
    },
    {
      value: 'stool',
      label: 'stool',
    }, 
    {
      value: 'pain on rest',
      label: 'pain on rest',
    },
    {
      value: 'rectal bleeding',
      label: 'rectal bleeding',
    }   
  ];
  //aptitude--------------------
  const APTITUDE = [
    {
      value: 'true',
      label: 'apt',
    },
    {  
      value: 'false',
      label: 'inapt',
    },
  ];
  //orientation causes
  const CAUSES = [
    {
      value: 'notice',
      label: 'notice',
    },
    {  
      value: 'hospitalization',
      label: 'hospitalization',
    },
    {  
      value: 'treatment',
      label: 'treatment',
    },
  ];
  const [currency, setCurrency] = React.useState('houssem');
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
          value={currency}
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
                <GridItem xs={12} sm={12} md={5}>
                <TextField
             id="date"
             label="Date"
             type="date"
             defaultValue="2017-05-24"
             className={classes.textField}
               InputLabelProps={{
              shrink: true,
                   }}
                />
                
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
          id="weight"
          label="Weight : kg"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
          id="filled-number"
          label="heigh : m"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Hearing_right"
                    id="hearing-right"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Hearing_left"
                    id="hearing_left-"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Visual_acuity_with_correction_left"
                    id="vcl"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Visual_acuity_with_correction_right"
                    id="vcr"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Visual_acuity_without_correction_left"
                    id="vwcl"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Visual_acuity_without_correction_right"
                    id="vwcr"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                  <br></br>
                <TextField
          id="skin_state"
          select
          value={SkinProblems}
          onChange={handleChange}
          helperText="Please select skin problems"
        >
          {SkinProblems.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Skin exam"
                    id="SkinExam"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                  <br></br>
                <TextField
          id="skin_state"
          select
          value={OPHTALMOLOGYPROBLEMS}
          onChange={handleChange}
          helperText="Please select ophtalmology problems"
        >
          {OPHTALMOLOGYPROBLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Ophtalmology exam"
                    id="ophtalmological_exam"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                  <br></br>
                <TextField
          id="orl_state"
          select
          value={ORLPROBLEMS}
          onChange={handleChange}
          helperText="Please select orl problems"
        >
          {ORLPROBLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Orl exam"
                    id="orl_exam"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                  <br></br>
                <TextField
          id="locomotor_state"
          select
          value={LOCOMOTORPROLEMS}
          onChange={handleChange}
          helperText="Please select locomotor problems"
        >
          {LOCOMOTORPROLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="locomotor exam"
                    id="locomotor_exam"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                  <br></br>
                <TextField
          id="respiratory_state"
          select
          value={RESPIRATORYPROBLEMS}
          onChange={handleChange}
          helperText="Please select respiratory problems"
        >
          {RESPIRATORYPROBLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="respiratory exam"
                    id="respiratory_exam"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                  <br></br>
                <TextField
          id="cardiovascular_state"
          select
          value={CARDIOVASCULARPROBLEMS}
          onChange={handleChange}
          helperText="Please select cardiovascular problems"
        >
          {RESPIRATORYPROBLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="cardiovascular exam"
                    id="cardiovascular_exam"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                  <br></br>
                <TextField
          id="digestive_state"
          select
          value={CARDIOVASCULARPROBLEMS}
          onChange={handleChange}
          helperText="Please select digestive problems"
        >
          {DIGESTIVEPROBLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="digestive exam"
                    id="digestive_exam"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                  <br></br>
                <TextField
          id="aptitude"
          select
          value={APTITUDE}
          defaultValue="false"
          onChange={handleChange}
          helperText="Please select aptitude state"
        >
          {APTITUDE.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Reason"
                    id="reason"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={4}>
                  <br></br>
                <TextField
          id="orientation_cause"
          select
          value={CAUSES}
          defaultValue="notice"
          onChange={handleChange}
          helperText="Please select orientation_cause"
        >
          {CAUSES.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Orientation specialist"
                    id="orientation_specialist"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                    labelText="Orientation response"
                    id="orientation_response"
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
