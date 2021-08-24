// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import AsynchronousSelectPatients from '../../components/AsynchronousSelectPatients';

export default function patients() {
  const [open, setOpen] = React.useState(false);
  const [patient, setPatient] = React.useState({
    user:{
      first_name:'',
      last_name:'',
    },
    type:'',
    education_level:''
  });
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  return (
    <div>
      <AsynchronousSelectPatients patient={patient} setPatient={setPatient} />
    </div>
  );
}
