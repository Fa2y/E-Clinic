import React,{useEffect} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TextField from 'components/controls/Input';
import MenuItem from '@material-ui/core/MenuItem';
import avatar from "assets/img/faces/marc.jpg";
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width:250
    },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
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
  GridContainer :{
    backgroundColor: "DodgerBlue",
  },
  btnDiv :{
    display :"flex",
    justifyContent :"center"
  },
  btn: {
    width:200,
    margin:4,
  },
}));
export default function MedicalExam() {
  const classes = styles();
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
      value: true,
      label: 'apt',
    },
    {  
      value: false,
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
  
  //---------------------------
  const initialState={
    patient: "",
    date: "",
    wieght: "",
    height: "",
    hearing_right: "",
    hearing_left: "",
    visual_acuity_with_correction_left: "",
    visual_acuity_with_correction_right: "",
    visual_acuity_without_correction_left: "",
    visual_acuity_without_correction_right:"",
    skin_state:"",
    skin_exam:"",
    ophtalmological_state:"",
    ophtalmological_exam:"",
    respiratory_state:"",
    respiratory_exam:"",
    cardiovascular_state:"",
    cardiovascular_exam:"",
    digestive_state:"",
    digestive_exam:"",
    aptitude:"",
    reason:"",
    orientation_cause:"",
    orientation_response:"",
    reason:"",
    orientation_specialist:"",
    orl_state:"",
    orl_exam:"",
    locomotor_case:"",
    locomotor_exam:"",
  }
  const[keyForm,setkey]=React.useState(0)//when i click cancel : state change so all components on the form will re_render 
  const [values, setValues] = React.useState({
    ...initialState
  });
  
  //------------------------
  //preserve the initial state for canceling
  const handleChange = (event) => {
    if (event?.target) {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
  };
  const postData = () => {
    axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            values
        })
}
const cancel = () => {
  setValues({
    ...initialState,
  });
  setkey({
    keyForm: keyForm + 1
  })
}
  return (
    <div>
      <form key={keyForm}>
      <GridContainer>
          <Card>
            <CardBody>
              <GridContainer>
            <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}} >
        <InputLabel id="demo-simple-select-outlined-label" >Patients</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          //value={age}
          onChange={handleChange}
          value={values.patient}
          name="patient"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </GridContainer>
        
            <GridContainer>
              <br></br>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
             id="date"
             variant="outlined"
             name="date"
             label="Date"
             type="date"
             value={values.date}
             onChange={handleChange}
             className={classes.textField}
               InputLabelProps={{
              shrink: true,
                   }}
                />   
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField id="outlined-basic" label="Weight kg" variant="outlined" type="number" name="wieght" onChange={handleChange} 
                 value={values.wieght}
                />         
                 </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField id="outlined-basic" label="Height m" variant="outlined" type="number" name="height" onChange={handleChange} 
                value={values.height}

                /> 
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                <TextField name="hearing_right" label="Hearing right" variant="outlined" fullWidth onChange={handleChange} value={values.hearing_right} /> 
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <TextField name="hearing_left" label="Hearing left" variant="outlined" fullWidth onChange={handleChange} value={values.hearing_left}/> 
                </GridItem>
              </GridContainer>
              
              <GridContainer>   
                <GridItem xs={12} sm={12} md={6}>
                <TextField name="visual_acuity_with_correction_left" label=" Visual acuity with correction left" variant="outlined" fullWidth onChange={handleChange}value={values.visual_acuity_with_correction_left} />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <TextField name="visual_acuity_with_correction_right" label=" Visual acuity with correction right" variant="outlined" fullWidth onChange={handleChange} value={values.visual_acuity_with_correction_right}/>
                </GridItem>
              </GridContainer>

              <GridContainer>   
                <GridItem xs={12} sm={12} md={6}>
                <TextField name="visual_acuity_without_correction_left" label=" Visual acuity without correction left" variant="outlined" fullWidth onChange={handleChange} value={values.visual_acuity_without_correction_left}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <TextField name="visual_acuity_without_correction_right" label=" Visual acuity without correction right" variant="outlined" fullWidth onChange={handleChange} value={values.visual_acuity_without_correction_right} />
                </GridItem>
              </GridContainer> 

              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label"  >Skin problems</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          name="skin_state"
          value={values.skin_state}
          onChange={handleChange}
          label="Age"
        >
         {SkinProblems.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label="Skin exam"
                    name="skin_exam"
                    value={values.skin_exam}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label" >Ophtalmology problems</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          name="ophtalmological_state"
          value={values.ophtalmological_state}
          onChange={handleChange}
           
        >
         {OPHTALMOLOGYPROBLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label="Ophtalmology exam"
                    name="ophtalmological_exam"
                    fullWidth
                    variant="outlined"
                    value={values.ophtalmological_exam}
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" >Orl problems</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          name="orl_state"
          value={values.orl_state}
          onChange={handleChange}
           
        >
         {ORLPROBLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label="Orl exam"
                    name="orl_exam"
                    fullWidth
                    onChange={handleChange}
                    value={values.orl_exam}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" >Locomoto problems</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          name="locomotor_case"
          value={values.locomotor_case}
          onChange={handleChange}
           
        >
         {LOCOMOTORPROLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label="locomotor exam"
                    name="locomotor_exam"
                    value={values.locomotor_exam}
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" >Cardiovascular problems</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          name="cardiovascular_state"
          value={values.cardiovascular_state}
          onChange={handleChange}
        >
         {CARDIOVASCULARPROBLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label="Cardiovascular exam"
                    name="cardiovascular_exam"
                    fullWidth
                    value={values.cardiovascular_exam}
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" >Respiratory problems</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          name="respiratory_state"
          value={values.respiratory_state}
          onChange={handleChange}
        >
         {RESPIRATORYPROBLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label="Respiratory exam"
                    name="respiratory_exam"
                    value={values.respiratory_exam}
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" >Digestive problems</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          name="digestive_state"
          value={values.digestive_state}
          onChange={handleChange}
        >
         {DIGESTIVEPROBLEMS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label="Digestive exam"
                    name="digestive_exam"
                    value={values.digestive_exam}
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={6}>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" >Aptitude</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          name="aptitude"
          value={values.aptitude}
          onChange={handleChange}
        >
         {APTITUDE.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label="Reason"
                    name="reason"
                    value={values.reason}
                    fullWidth
                    onChange={handleChange}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>        
                <GridItem xs={12} sm={12} md={4}>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" >Orientation cause</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          name="orientation_cause"
          value={values.orientation_cause}
          onChange={handleChange}
        >
         {CAUSES.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    label="Orientation specialist"
                    name="orientation_specialist"
                    fullWidth
                    value={values.orientation_specialist}
                    onChange={handleChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    label="Orientation response"
                    name="orientation_response"
                    fullWidth  
                    value={values.orientation_response}
                    onChange={handleChange}                  
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <div className={classes.btnDiv}>
                <Button variant="contained" color="primary" size="large" className={classes.btn} onClick={postData} type='submit'>
                Create
               </Button>
                        
                <Button variant="contained" color="secondary" size="large" className={classes.btn} onClick={cancel} type='submit'>
                   Cancel
                </Button>
                
          </div>
            <CardFooter>
            </CardFooter>
          </Card>
      </GridContainer>
      </form>
    </div>
  );
}
