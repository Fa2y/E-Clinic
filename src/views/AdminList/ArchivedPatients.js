import React, { useState, useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import Table from 'components/Table/Table';
import Card from 'components/Card/Card';
import Button from 'components/CustomButtons/Button';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import Popup from 'components/Popup';
import useSWR from 'swr';
import patientAPI from 'lib/api/admin';

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF',
    },
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [patients, setPatients] = useState([]);
  const [restoredPatient, setRestoredPatient] = useState('');

  const { data: pData, error: pErr } = useSWR(
    ['archived'],
    patientAPI.fetchDeletedPatients,
  );

  useEffect(() => {
    if (!pErr && pData) {
      const data = pData?.data
        ?.filter((patient) => !patient.is_approved)
        .map((patient) => [
          patient.user.first_name,
          patient.user.last_name,
          patient.user.email,
          patient.user.date_joined,
          `${patient.type} : ${patient.education_level}`,
          patient.pid,
        ]);
      setPatients(data);
    } else {
      // Show error
    }
  }, [pData, pErr]);

  const handleRestore = (pid) => {
    patientAPI.restorePatient(pid);
    setOpenPopup(false);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              Liste des comptes archivés
            </h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                'Nom',
                'Prenom',
                'Email',
                'Date',
                'Niveau',
                'Operations',
              ]}
              tableData={
                patients
                  ? patients.map((patient) =>
                      patient.slice(0, 5).concat(
                        <div>
                          <Button
                            color="success"
                            onClick={() => {
                              setOpenPopup(true);
                              setRestoredPatient(patient[5]);
                            }}
                          >
                            Restaurer
                          </Button>
                        </div>,
                      ),
                    )
                  : []
              }
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} />
      <Popup
        title="Confirmation"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <div>
          <p>Voulez-vous restaurer le patient</p>
          <Button
            color="success"
            onClick={() => {
              handleRestore(restoredPatient);
            }}
          >
            Restaurer
          </Button>
          <Button
            color="info"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </Popup>
    </GridContainer>
  );
}
