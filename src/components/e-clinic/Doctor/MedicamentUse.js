import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Autocomplete from '@material-ui/lab/Autocomplete';
import medicaments  from '../../../Medical_constants/medicaments';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  med: {
    backgroundColor: '#F8F9F9',
  },
  radio: {
    marginLeft: '25%',
  },
  icon: {
    marginTop: '2vh',
    marginRight: '4vh',
  },
}));
export default function MedicamentUse(props) {
  const initialState = {
    medicament: '',
    duration: '',
    nbPerDay: '',
    time: '',
    remarque: '',
  };
  const [keyForm, setkey] = React.useState(0); //when i click cancel : state change so all components on the form will re_render
  const [medInfo, setMedInfo] = React.useState(initialState);
  const [medInfo2, setMedInfo2] = React.useState(initialState);
  const classes = useStyles();
  const updateMed = () => {
    setMedInfo2({
      medicament: medInfo.medicament,
      duration: medInfo.duration,
      nbPerDay: medInfo.nbPerDay,
      time: medInfo.time,
      remarque: medInfo.remarque,
      sent: true,
    });
    setMedInfo(initialState);
    setkey((prevkey) => prevkey + 1);
  };
  useEffect(() => {
    props.handleClick(medInfo2); // This is be executed when `medInfo2` state changes
  }, [medInfo2]);
  const handleChange = (event) => {
    if (event?.target) {
      setMedInfo({
        ...medInfo,
        [event.target.name]: event.target.value,
      });
    }
  };
  return (
    <div key={keyForm}>
      <div className={classes.med}>
        <Autocomplete
          id="combo-box-demo"
          name="medicament"
          onChange={(event, value) =>
            setMedInfo({
              ...medInfo,
              medicament: value.name,
            })
          }
          options={medicaments}
          getOptionLabel={(option) => option.name}
          getOptionSelected={(option, value) => option.name === option.name}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select medicament"
              variant="outlined"
            />
          )}
        />
        <br></br>
        <GridContainer>
          <GridItem xs={6} sm={12} md={6}>
            <TextField
              variant="outlined"
              label={'Period : '}
              fullWidth
              name="duration"
              onChange={handleChange}
              value={medInfo.duration}
            />
          </GridItem>
          <GridItem xs={6} sm={12} md={6}>
            <TextField
              name="nbPerDay"
              variant="outlined"
              label={'Number per day : '}
              fullWidth
              type="number"
              onChange={handleChange}
              value={medInfo.nbPerDay}
            />
          </GridItem>
        </GridContainer>
        <br></br>
        <RadioGroup row aria-label="position" name="time" defaultValue="top">
          <div className={classes.radio}>
            <FormControlLabel
              value="before"
              control={<Radio color="primary" />}
              label="Before"
              labelPlacement="start"
              onChange={handleChange}
            />
            <FormControlLabel
              value="during"
              control={<Radio color="primary" />}
              label="During"
              labelPlacement="start"
              onChange={handleChange}
            />
            <FormControlLabel
              value="after"
              control={<Radio color="primary" />}
              label="After"
              labelPlacement="start"
              onChange={handleChange}
            />
          </div>
        </RadioGroup>
        <br></br>
        <GridContainer>
          <GridItem xs={11}>
            <TextField
              name="remarque"
              variant="outlined"
              label={'Remark : '}
              fullWidth
              type="number"
              onChange={handleChange}
              value={medInfo.remarque}
              //onChange={handleChange}
              //value={ordonance.medicaments.nbPerDay}
              multiline
              rows={3}
              maxRows={40}
            />
          </GridItem>
          <GridItem xs={1}>
            <div className={classes.icon}>
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={updateMed}
              >
                <AddCircleIcon fontSize="large" />
              </IconButton>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
