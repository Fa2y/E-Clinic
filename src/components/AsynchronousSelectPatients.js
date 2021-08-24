// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import React from "react";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useSWR from "swr";
import { doctorAPI } from "../lib/api/doctor";

// <AsynchronousSelectPatients patient={patient} setPatient={setPatient} />;
export default function AsynchronousSelectPatients({ patient, handleChange }) {

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const { data: pData, error: pErr } = useSWR(
    ["patients"],
    doctorAPI.fetchPatients
  );
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if (active) {
      setOptions(pData?.data);
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
      style={{ width: "100%" }}
      open={open}
      value={patient}
      onChange={handleChange}
      name="patient"
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) =>
        option.user.first_name === value.user.first_name
      }
      getOptionLabel={(option) => {
        if (option?.type)
          return `${option?.type} (${option?.education_level}): ${option?.user?.first_name} ${option?.user?.last_name}`;
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