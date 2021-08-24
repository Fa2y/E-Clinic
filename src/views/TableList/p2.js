import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
const p2=()=> {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const { data: pData, error: pErr } = useSWR(
    ["patients"],
    patientAPI.fetchPatients
  );

  useEffect(() => {
    if (!pErr && pData) {
      const data = pData?.data.map((patient) => {
        return [
          patient.user.first_name,
          patient.user.last_name,
          patient.user.email,
          patient.user.date_joined,
          `${patient.type} : ${patient.education_level}`,
        ];
      });
      setPatients(data);
    } else {
      //Show error
    }
  }, [pData, pErr]);

    return (
        <div>
            
        </div>
    )
}
export default p2;