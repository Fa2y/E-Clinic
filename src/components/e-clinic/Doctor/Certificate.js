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
import image from 'assets/img/certificate.jpg';
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
import { getUser } from 'lib/utils/helpers';

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
}));
export default function Certificate(props) {
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
    date: today_date,
    diagnosis: '',
    days: 0,
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [certificate, setCertificate] = React.useState(initialState);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    if (event?.target) {
      setCertificate({
        ...certificate,
        [event.target.name]: event.target.value,
      });
    }
  };
  const user = getUser();
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
            Medical Certificate
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

              <h3 align="center">Medical Certificate</h3>
              <GridContainer>
                <p>To Whom It May Concern</p>
                <p>
                  This is to certify that{' '}
                  <strong>
                    {' '}
                    {props.patient.last_name +
                      ' ' +
                      props.patient.first_name}{' '}
                  </strong>
                </p>
                <p>
                  Was seen in my clinic on <strong>{certificate.date}</strong>{' '}
                  with the following diagnosis
                </p>
                <TextField
                  label="diagnosis"
                  name="diagnosis"
                  value={certificate.diagnosis}
                  //variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
                <Box
                  component="div"
                  display="inline"
                  p={1}
                  m={2}
                  className={classes.days}
                >
                  <p>The patient requires</p>
                </Box>
                <Box
                  component="div"
                  display="inline"
                  p={1}
                  m={1}
                  className={classes.days}
                >
                  <TextField
                    label="number of days"
                    name="days"
                    type="number"
                    value={certificate.days}
                    //variant="outlined"
                    fullWidth
                    onChange={handleChange}
                  />
                </Box>

                <p>
                  days for to rest and heal.
                  <br></br>
                  Seen by:{' '}
                  <strong> {`Dr.${user?.last_name} ${user?.last_name}`}</strong>
                </p>
              </GridContainer>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  props?.CreateDetail({
                    diagnosis: certificate?.diagnosis,
                    days: certificate?.days,
                  });
                  handleClose();
                }}
              >
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
                <h3 align="center">Medical Certificate</h3>
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
                      </strong>
                    </p>
                    <p>
                      Was seen in my clinic on{' '}
                      <strong>{certificate.date}</strong> with the following
                      diagnosis :<br></br>
                      <br></br>
                      <strong>{certificate.diagnosis}</strong>
                    </p>
                    <p>
                      The patient requires <strong>{certificate.days}</strong>{' '}
                      days for to rest and heal.
                      <br></br>
                      <br></br>
                      Seen by:{' '}
                      <strong>
                        {`Dr.${user?.last_name} ${user?.last_name}`}
                      </strong>
                      <br></br>
                      <br></br>
                      Dr’s Signature Here:
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
