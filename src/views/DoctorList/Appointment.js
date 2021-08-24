import React from 'react';
// import Datetime from 'react-datetime';

// import 'react-datetime/css/react-datetime.css';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import { TextField, Modal } from '@material-ui/core';
import AsynchronousSelectPatients from 'components/e-clinic/Doctor/AsynchronousSelectPatients';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
};

const useStyles = makeStyles(styles);

export default function AppointmentCreate() {
  const classes = useStyles();
  const [openCreate, setOpenCreate] = React.useState(false);
  const handleClose = () => {
    setOpenCreate(false);
  };
  return (
    <div>
      <Card>
        <CardHeader color="info">
          <h3>Appointment Management</h3>
        </CardHeader>
        <CardBody>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => setOpenCreate(true)}
          >
            Create Appointment
          </Button>
          <Modal
            open={openCreate}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <GridContainer
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <GridItem xs={6}>
                <Card>
                  <CardHeader color="info">
                    <h4 className={classes.cardTitleWhite}>Appointment</h4>
                    <p className={classes.cardCategoryWhite}>Book</p>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <AsynchronousSelectPatients />
                      <GridItem xs={12} sm={12} md={5}>
                        <CustomInput
                          labelText="Description"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            disabled: false,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Comment"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={4}>
                        <TextField
                          id="datetime-local"
                          label="Next appointment"
                          type="datetime-local"
                          defaultValue="2017-05-24T10:30"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <Button color="info">Submit</Button>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </Modal>
        </CardBody>
      </Card>
    </div>
  );
}
