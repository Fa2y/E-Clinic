import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { red } from '@material-ui/core/colors';
import image from '../../../assets/img/ordonance.jpg';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import PrintIcon from '@material-ui/icons/Print';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Autocomplete from '@material-ui/lab/Autocomplete';
import medicaments from '../../../Medical_constants/medicaments';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import { TableBody } from '@material-ui/core';
import age from 'Medical_constants/UsefulFunctions';
//import { intlFormat } from "date-fns/esm";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  para: {
    marginLeft: '2.5vh',
    marginTop: '2vh',
  },
  days: {
    marginLeft: '-1vh',
  },
  certificateContent: {
    marginLeft: '2vh',
  },
  med: {
    backgroundColor: '#F8F9F9',
  },
  radio: {
    marginLeft: '25%',
  },
  meds: {
    marginLeft: '2vh',
  },
}));
export default function MedOrdonance(props) {
  const [keyForm, setkey] = React.useState(0); //when i click cancel : state change so all components on the form will re_render
  //for pdf printing
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  //-------------------------------
  //today
  var today = new Date(),
    today_date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
  //------------------
  const initialStateTable = {
    patient: '',
    date: today_date,
    med: [],
  };
  const initialState = {
    medicament: '',
    duration: '',
    nbPerDay: '',
    time: '',
    nbUnit: '1',
  };
  const classes = useStyles();
  const [showPdfBtn, setShowPdfBtn] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  //const [addMed, setAddMed] = React.useState(1);
  const [ordonanceTable, setOrdonanceTable] = React.useState(initialStateTable);
  const [ordonance, setOrdonance] = React.useState(initialState);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOrdonance(initialState);
    setOrdonanceTable(initialStateTable)
    setOpen(false);
    setShowPdfBtn(false)
  };
  const handleChange = (event) => {
    if (event?.target) {
      setOrdonance({
        ...ordonance,
        [event.target.name]: event.target.value,
      });
    }
  };
  const updateMed = () => {
    setOrdonanceTable((prevState) => ({
      ...ordonanceTable,
      med: [...prevState.med, ordonance],
    }));
    setkey((prevkey) => prevkey + 1);
  };
  const handleSubmit = () => {
    setOrdonanceTable((prevState) => ({
      ...ordonanceTable,
      med: [...prevState.med, ordonance],
    }));
    setShowPdfBtn(true)
  };
  //-----------
  //console.log(ordonance.med[1]);
  const Meds = ordonanceTable.med;
  const listItems = Meds.map((number) => (
    <div>
      <TableBody>
        <TableRow>
          <TableCell>{number.medicament}</TableCell>
          <TableCell align="right">{number.time}</TableCell>
          <TableCell align="right">{number.duration} days</TableCell>
          <TableCell align="right">{number.nbPerDay} times per day</TableCell>
          <TableCell align="right">{number.nbUnit} units</TableCell>
        </TableRow>
      </TableBody>
    </div>
  ));

  console.log(medicaments.name);
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia component="img" src={image} />
        <CardActions disableSpacing>
          <Button
            variant="contained"
            color="primary"
            fullWidth="true"
            onClick={handleClickOpen}
          >
            Medical prescription
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth="true"
          >
            <DialogTitle
              id="form-dialog-title"
              align="center"
              style={{ display: 'none' }}
            >
              Higher school of computer science sidi belabbes
            </DialogTitle>
            <DialogContent>
              <DialogTitle id="form-dialog-title" align="center">
                Higher school of computer science sidi belabbes
              </DialogTitle>
              <h3 align="center">Medical prescription</h3>
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <div>
                    <p>
                      <strong>
                        Patient :{' '}
                        {props.patient.last_name +
                          ' ' +
                          props.patient.first_name}
                      </strong>
                    </p>
                    <p>
                      <strong>
                        Age : {age(props.patient.date_of_birth, today_date)}
                      </strong>
                    </p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div>
                    <p>
                      <strong>Doctor : Ahmed Benhamouda</strong>
                    </p>
                    <p>
                      <strong>Date : {ordonanceTable.date}</strong>
                    </p>
                  </div>
                </GridItem>
              </GridContainer>
              <div key={keyForm}>
                <div className={classes.med}>
                  <Autocomplete
                    id="combo-box-demo"
                    name="medicament"
                    onChange={(event, value) =>
                      setOrdonance({
                        ...ordonance,
                        medicament: value.name,
                      })
                    }
                    options={medicaments}
                    getOptionLabel={(option) => option.name}
                    getOptionSelected={(option, value) =>
                      option.name === option.name
                    }
                    fullWidth
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select medicament"
                        variant="outlined"
                      />
                    )}
                  />
                  <br></br>
                  <GridContainer>
                    <GridItem xs={6} sm={12} md={6}>
                      <TextField
                        variant="outlined"
                        label={'Period : '}
                        fullWidth
                        name="duration"
                        onChange={handleChange}
                        //value={ordonanceVide.duration}
                      />
                    </GridItem>
                    <GridItem xs={6} sm={12} md={6}>
                      <TextField
                        name="nbPerDay"
                        variant="outlined"
                        label={'Number per day : '}
                        fullWidth
                        type="number"
                        onChange={handleChange}
                        //value={ordonanceVide.nbPerDay}
                      />
                    </GridItem>
                  </GridContainer>
                  <br></br>
                  <RadioGroup
                    row
                    aria-label="position"
                    name="time"
                    defaultValue="top"
                  >
                    <div className={classes.radio}>
                      <FormControlLabel
                        value="before"
                        control={<Radio color="primary" />}
                        label="Before"
                        labelPlacement="start"
                        onChange={handleChange}
                      />
                      <FormControlLabel
                        value="during"
                        control={<Radio color="primary" />}
                        label="During"
                        labelPlacement="start"
                        onChange={handleChange}
                      />
                      <FormControlLabel
                        value="after"
                        control={<Radio color="primary" />}
                        label="After"
                        labelPlacement="start"
                        onChange={handleChange}
                      />
                    </div>
                  </RadioGroup>
                  <br></br>
                  <GridContainer>
                    <GridItem xs={11}>
                      <TextField
                        name="nbUnit"
                        variant="outlined"
                        label={'Number unit : '}
                        fullWidth
                        onChange={handleChange}
                        //value={ordonanceVide.remarque}
                        //onChange={handleChange}
                      />
                    </GridItem>
                    <GridItem xs={1}>
                      <div className={classes.icon}>
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                          onClick={updateMed}
                        >
                          <AddCircleIcon fontSize="large" />
                        </IconButton>
                      </div>
                    </GridItem>
                  </GridContainer>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                style={{ display: showPdfBtn ? 'inline' : 'none' }}
                color="primary"
                onClick={handlePrint}
                //endIcon={<PrintIcon />}
                variant="contained"
              >
                Print this out!
              </Button>
              <Button onClick={handleClose} color="primary" variant="contained">
                Cancel
              </Button>
            </DialogActions>
            <div style={{ display: 'none' }}>
              <div ref={componentRef}>
                <h4 align="center">
                  <strong>
                    Higher school of computer science sidi belabbes
                  </strong>
                  <br></br>
                  <strong>المدرسة العليا للاعلام الالي سيدي بلعباس</strong>
                </h4>
                <h3 align="center">Medical prescription</h3>
                <GridContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">
                          <strong>
                            Patient :{' '}
                            {props.patient.last_name +
                              ' ' +
                              props.patient.first_name}
                          </strong>
                        </TableCell>
                        <TableCell align="left">
                          <strong>Doctor : Ahmed Benhamouda</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">
                          <strong>
                            Age of patient :{' '}
                            {age(props.patient.date_of_birth, today_date)}
                          </strong>
                        </TableCell>
                        <TableCell align="left">
                          <strong>Date : {ordonanceTable.date}</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </GridContainer>
                <GridContainer>
                  <div className={classes.meds}>{listItems}</div>
                </GridContainer>
              </div>
            </div>
          </Dialog>
        </CardActions>
      </Card>
    </div>
  );
}
