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
import { extractErrorMsg } from 'lib/utils/helpers';
import { toast } from 'react-toastify';
import moment from 'moment';

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

  const {
    data: pData,
    error: pErr,
    mutate,
  } = useSWR(['archived'], patientAPI.fetchDeletedPatients);

  useEffect(() => {
    if (!pErr && pData) {
      const { data, status } = pData;

      if (status < 200 || status > 299) {
        const errors = extractErrorMsg(data);
        errors.map((error) => toast.error(error));
        return [];
      }
      setPatients(
        pData?.data
          ?.filter((patient) => !patient.is_approved)
          .map((patient) => [
            patient.user.first_name,
            patient.user.last_name,
            patient.user.email,
            moment(patient.user.date_joined).format('YYYY MMM DD'),
            `${patient.type} : ${patient.education_level}`,
            patient.pid,
          ]),
      );
    }
    return [];
  }, [pData, pErr]);

  const handleRestore = async (pid) => {
    const { data, status } = await patientAPI.restorePatient(pid);
    if (status < 200 || status > 299) {
      const errors = extractErrorMsg(data);
      errors.map((error) => toast.error(error));
      return [];
    }
    toast.success('Patient Restored Successfully');
    mutate({ data: [], status: 200 }, true);
    setOpenPopup(false);
    return [];
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
