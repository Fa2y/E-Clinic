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
import image from 'assets/img/orientation.jpg';
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
import age from 'Medical_constants/UsefulFunctions';
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
}));
export default function Orientation(props) {
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
    orientation: '',
    doctor_name: '',
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [orientation, setOrientation] = React.useState(initialState);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const user = getUser();
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    if (event?.target) {
      setOrientation({
        ...orientation,
        [event.target.name]: event.target.value,
      });
    }
  };
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
            Orientation
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
                        Age : {age(props?.patient?.date_of_birth, today_date)}
                      </strong>
                    </p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div>
                    <p>
                      <strong>
                        {`Doctor: Dr.${user?.last_name} ${user?.first_name}`}{' '}
                      </strong>
                    </p>
                    <p>
                      <strong>Date : {orientation.date}</strong>
                    </p>
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <TextField
                    autoFocus
                    margin="dense"
                    name="doctor_name"
                    onChange={handleChange}
                    label="Doctor Name"
                  />
                </div>
                <TextField
                  margin="dense"
                  name="orientation"
                  fullWidth
                  multiline
                  rows={10}
                  maxRows={40}
                  onChange={handleChange}
                  label="write here your letter"
                />
              </GridContainer>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  props?.CreateDetail({
                    orientation: orientation?.orientation,
                    doctor_name: orientation?.doctor_name,
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
                <GridContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <strong>
                            Patient :{' '}
                            {props.patient.last_name +
                              ' ' +
                              props.patient.first_name}
                          </strong>
                        </TableCell>
                        <TableCell align="right">
                          <strong>{`Doctor: Dr.${user?.last_name} ${user?.first_name}`}</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <strong>
                            Age :{' '}
                            {age(props?.patient?.date_of_birth, today_date)}
                          </strong>
                        </TableCell>
                        <TableCell align="right">
                          <strong>Date : {orientation.date}</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <strong>Dear {orientation?.doctor_name},</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                  <Typography
                    className={classes.para}
                    variant="body1"
                    gutterBottom
                  >
                    {orientation.orientation}
                  </Typography>
                </GridContainer>
              </div>
            </div>
          </Dialog>
        </CardActions>
      </Card>
    </div>
  );
}
