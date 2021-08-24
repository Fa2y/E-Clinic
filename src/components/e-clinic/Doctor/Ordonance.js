import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { red } from '@material-ui/core/colors';
import image from 'assets/img/ordonance.jpg';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import PrintIcon from '@material-ui/icons/Print';
import OrientationPdf from './OrientationPdf';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Autocomplete from '@material-ui/lab/Autocomplete';
import medicaments from 'Medical_constants/medicaments';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MedicamentUse from 'components/e-clinic/Doctor/MedicamentUse';
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
}));
export default function Ordonance(props) {
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
  const initialState = {
    patient: '',
    medicaments: [
      {
        date: today_date,
        medicament: '',
        duration: '',
        nbPerDay: '',
        time: '',
        remarque: '',
      },
    ],
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [addMed, setAddMed] = React.useState(1);
  const [ordonance, setOrdonance] = React.useState(initialState);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOrdonance(initialState);
    setOpen(false);
  };
  const handleChange = (event) => {
    if (event?.target) {
      setOrdonance({
        ...ordonance,
        [event.target.name]: event.target.value,
      });
    }
  };

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
                      <strong>Age : </strong>
                    </p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div>
                    <p>
                      <strong>Doctor :</strong>
                    </p>
                    <p>
                      <strong>Date : {ordonance.date}</strong>
                    </p>
                  </div>
                </GridItem>
              </GridContainer>
              <MedicamentUse
                handleClick={(value, name) =>
                  setAddMed({
                    addMed: value,
                  })
                }
              />
            </DialogContent>
            <DialogActions>
              <Button color="primary" variant="contained">
                Submit
              </Button>
              <Button
                color="primary"
                onClick={handlePrint}
                endIcon={<PrintIcon />}
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
                </h4>
                <h3 align="center">Medical prescription</h3>
                <GridContainer>
                  <div className={classes.certificateContent}>
                    <p>To Whom It May Concern</p>
                    <p>
                      This is to certify that{' '}
                      <strong>
                        {' '}
                        {props.patient.last_name +
                          ' ' +
                          props.patient.first_name}{' '}
                        Aymen Djebbar
                      </strong>
                    </p>
                    <p>
                      Was seen in my clinic on <strong>{ordonance.date}</strong>{' '}
                      with the following diagnosis :<br></br>
                      <br></br>
                      <strong>{ordonance.diagnosis}</strong>
                    </p>
                    <p>
                      The patient requires <strong>{ordonance.days}</strong>{' '}
                      days for to rest and heal.
                      <br></br>
                      <br></br>
                      Seen by Dr :<strong> houssem</strong>
                      <br></br>
                      <br></br>
                      Dr’s Signature
                    </p>
                  </div>
                </GridContainer>
              </div>
            </div>
          </Dialog>
        </CardActions>
      </Card>
    </div>
  );
}
