import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width:250
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
export default function SelectField(props) {
    const { name, label, value,error=null, onChange, options } = props;
    const classes = useStyles();
    return (
        <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label" >{label}</InputLabel>
        <Select
          onChange={onChange}
          value={value}
          name={name}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
}
