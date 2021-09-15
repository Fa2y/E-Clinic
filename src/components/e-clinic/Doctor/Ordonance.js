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
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Autocomplete from '@material-ui/lab/Autocomplete';
import medicaments from '../../../Medical_constants/medicaments';
import MedicamentUse from '../../e-clinic/Doctor/MedicamentUse';
import age from 'Medical_constants/UsefulFunctions';
//import { intlFormat } from "date-fns/esm";
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
export default function Ordonance(props) {
  //for pdf printing
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  //-------------------------------
  //today
  var today = new Date();
  const today_date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  //------------------
  const initialState = {
    patient: '',
    date: today_date,
    med: [
      {
        medicament: '',
        duration: '',
        nbPerDay: '',
        time: '',
        remarque: '',
      },
    ],
    sent: false,
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
  const user = getUser();
  const numbers = ordonance.med;
  const listItems = numbers.map((number) => (
    <Typography variant="body1" gutterBottom>
      {number.medicament +
        '  ' +
        number.duration +
        '  ' +
        number.nbPerDay +
        '  ' +
        number.time +
        '  ' +
        number.remarque}
    </Typography>
  ));

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
                      <strong>{`Patient :${props?.first_name} ${props?.last_name}`}</strong>
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
                      <strong>{`Doctor : ${user?.last_name} ${user?.first_name}`}</strong>
                    </p>
                    <p>
                      <strong>Date : {ordonance.date}</strong>
                    </p>
                  </div>
                </GridItem>
              </GridContainer>
              <MedicamentUse
                handleClick={(info) =>
                  setOrdonance((prevState) => ({
                    ...ordonance,
                    med: [...prevState.med, info],
                    sent: true,
                  }))
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
                  <br></br>
                  <strong>المدرسة العليا للاعلام الالي سيدي بلعباس</strong>
                </h4>
                <h3 align="center">Medical prescription</h3>
                <GridContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <strong>{`Patient :${props?.first_name} ${props?.last_name}`}</strong>
                        </TableCell>
                        <TableCell align="right">
                          <strong>{`Doctor : ${user?.last_name} ${user?.first_name}`}</strong>
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
                          <strong>Date : {ordonance.date}</strong>
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
