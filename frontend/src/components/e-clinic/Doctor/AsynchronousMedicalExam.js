// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import React from 'react';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useSWR from 'swr';
import doctorAPI from 'lib/api/doctor';
import moment from 'moment';

// <AsynchronousSelectPatients patient={patient} setPatient={setPatient} />;
export default function AsynchronousSelectMedicalExam({
  medicalExamData,
  handleChange,
}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options?.length === 0;
  const { data: pData, error: pErr } = useSWR(
    ['medicalExams'],
    doctorAPI.fetchMedicalExam,
  );
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if (active) {
      pData?.data ? setOptions(pData?.data) : setOptions([]);
    }

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: '100%' }}
      open={open}
      value={medicalExamData}
      onChange={handleChange}
      name="medicalExamData"
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) =>
        option?.patient_data.user.first_name ===
        option?.patient_data.user.first_name
      }
      getOptionLabel={(option) => {
        if (option?.id)
          return `${option?.patient_data.type} (${
            option?.patient_data.education_level
          }): ${option?.patient_data.user.first_name} ${
            option?.patient_data.user.last_name
          } (${moment(option?.date).format('YYYY MMM DD')})`;
      }}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Patient"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
