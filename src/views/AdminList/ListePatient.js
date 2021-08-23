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
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
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
  header: {
    direction: 'row',
    justify: 'space-between',
    alignItems: 'center',
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

export default function ListePatient() {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [patients, setPatients] = useState([]);

  const { data: pData, error: pErr } = useSWR(
    ['patients'],
    patientAPI.fetchPatients,
  );

  useEffect(() => {
    if (!pErr && pData) {
      const data = pData?.data?.map((patient) => [
        patient.user.first_name,
        patient.user.last_name,
        patient.user.email,
        patient.user.date_joined,
        `${patient.type} : ${patient.education_level}`,
      ]);
      setPatients(data);
    } else {
      // Show error
    }
  }, [pData, pErr]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <div className="header">
              <h4 className={classes.cardTitleWhite}>
                Liste des comptes créés
              </h4>
              <Button
                variant="outlined"
                color="info"
                startIcon={<AddToPhotosIcon />}
                onClick={() => {
                  setOpenPopup(true);
                }}
              >
                Ajouter utilisateur
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                'Nom',
                'Prenom',
                'Email',
                'Niveau',
                <div align="center">Operations </div>,
              ]}
              tableData={
                patients
                  ? patients.map((patient) =>
                      patient.concat(
                        <div>
                          <Button color="success">Activer</Button>
                          <Button color="danger">Disactiver</Button>
                          <Button color="primary">Modifier</Button>
                          <Button color="warning">Archiver</Button>
                        </div>,
                      ),
                    )
                  : []
                // [
                //   ["1", "Dakota Rice", "$36,738", "1 ere anne",
                //   <div>
                //   <Button color="success" >
                //   Activer
                // </Button>
                //  <Button color="danger" >
                //   Disactiver
                // </Button>
                // <Button color="primary" >
                //   Modifier
                // </Button>
                // <Button color="warning" >
                //   Archiver
                // </Button>
                // </div>],

                // ]
              }
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} />
      <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <></>
      </Popup>
    </GridContainer>
  );
}
