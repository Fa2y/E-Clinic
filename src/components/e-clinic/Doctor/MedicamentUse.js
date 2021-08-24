import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Autocomplete from '@material-ui/lab/Autocomplete';
import medicaments from 'Medical_constants/medicaments';
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
  const [add, setAdd] = React.useState(1);
  const [medInfo, setMedInfo] = React.useState(initialState);
  const classes = useStyles();
  const updateMed = () => {
    setAdd((prevAdd) => prevAdd + 1);
    props.handleClick(('addMed', add));
  };
  return (
    <div>
      <div className={classes.med}>
        <Autocomplete
          id="combo-box-demo"
          name="medicament"
          style={{ marginBottom: '2%' }}
          onChange={(event, value) =>
            setMedInfo({
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
        <GridContainer>
          <GridItem xs={6} sm={12} md={6}>
            <TextField
              variant="outlined"
              label={'Period : '}
              fullWidth
              name="period"
            />
          </GridItem>
          <GridItem xs={6} sm={12} md={6}>
            <TextField
              name="nbPerDay"
              variant="outlined"
              label={'Number per day : '}
              fullWidth
              type="number"
              //onChange={handleChange}
              //value={ordonance.medicaments.nbPerDay}
            />
          </GridItem>
        </GridContainer>
        <br></br>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="top"
        >
          <div className={classes.radio}>
            <FormControlLabel
              value="before"
              control={<Radio color="primary" />}
              label="Before"
              labelPlacement="start"
            />
            <FormControlLabel
              value="during"
              control={<Radio color="primary" />}
              label="During"
              labelPlacement="start"
            />
            <FormControlLabel
              value="after"
              control={<Radio color="primary" />}
              label="After"
              labelPlacement="start"
            />
          </div>
        </RadioGroup>
        <br></br>
        <GridContainer>
          <GridItem xs={11}>
            <TextField
              name="nbPerDay"
              variant="outlined"
              label={'Remark : '}
              fullWidth
              type="number"
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
