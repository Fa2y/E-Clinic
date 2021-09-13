import React, { useState, useContext, useEffect } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextField from 'components/controls/Input';
export default function TobacoConsumption(props) {
  const [checkedValues, setCheckedValues] = React.useState({
    smoking: false,
    chewing: false,
    injection: false,
    oldSmoker: false,
    alcohol: false,
    medication_consumption: false,
  });
  const [historyValues, setHistoryValues] = React.useState({
    smokingNumberUnits: 0,
    chewingNumberUnits: 0,
    injectionNumbernits: 0,
    ageFc: '',
    duration: '',
    medication: '',
  });
  const handleChange = async (event) => {
    if (event?.target) {
      setHistoryValues({
        ...historyValues,
        [event.target.name]: event.target.value,
      });
      // let targetName = event.target.name;
      props.handleClick(event.target.value, event.target.name);
    }
  };
  const handleChangeChecked = (event) => {
    if (event?.target) {
      setCheckedValues({
        ...checkedValues,
        [event.target.name]: event.target.checked,
      });
      props.handleClick(event.target.checked, event.target.name);
    }
  };

  //  console.log(namee);
  let smokingTrue;
  if (checkedValues.smoking) {
    smokingTrue = (
      <GridContainer>
        <GridItem xs={6} sm={3}>
          <TextField
            name="smokingNumberUnits"
            label="Number units"
            onChange={handleChange}
            //value={values.number_units}
            fullwidth
          />
        </GridItem>
        <GridItem xs={6} sm={3}>
          <TextField
            name="ageFc"
            label="Age of first cigarette"
            onChange={handleChange}
            //value={values.number_units}
            fullwidth
          />
        </GridItem>
        <GridItem xs={6} sm={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={historyValues.oldSmoker}
                onChange={handleChangeChecked}
                name="oldSmoker"
                color="primary"
              />
            }
            label="Old smoker"
          />
        </GridItem>
        <GridItem xs={6} sm={3}>
          <TextField
            name="duration"
            label="Duration"
            onChange={handleChange}
            //value={values.number_units}
            fullwidth
          />
        </GridItem>
      </GridContainer>
    );
  }
  //-------------------------
  let chewingTrue;
  if (checkedValues.chewing) {
    chewingTrue = (
      <GridItem xs={6} sm={3}>
        <TextField
          name="chewingNumberUnits"
          label="Number units"
          onChange={handleChange}
          //value={values.number_units}
          fullwidth
        />
      </GridItem>
    );
  }
  //-----------------------------
  let injectionTrue;
  if (checkedValues.injection) {
    injectionTrue = (
      <GridItem xs={6} sm={3}>
        <TextField
          name="injectionNumberUnits"
          label="Number units"
          onChange={handleChange}
          //value={values.number_units}
          fullwidth
        />
      </GridItem>
    );
  }
  //------------------------------
  let medicationTrue;
  if (checkedValues.medication_consumption) {
    medicationTrue = (
      <GridItem xs={3}>
        <TextField
          name="medication"
          label="Medication's name"
          onChange={handleChange}
          //value={values.number_units}
          fullwidth
        />
      </GridItem>
    );
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={historyValues.smoking}
                onChange={handleChangeChecked}
                name="smoking"
                color="primary"
              />
            }
            label="Smoking"
          />
        </GridItem>
      </GridContainer>
      {smokingTrue}
      <GridContainer>
        <GridItem xs={6} sm={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={historyValues.chewing}
                onChange={handleChangeChecked}
                name="chewing"
                color="primary"
              />
            }
            label="Chewing"
          />
        </GridItem>
        {chewingTrue}
      </GridContainer>

      <GridContainer>
        <GridItem xs={6} sm={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={historyValues.injection}
                onChange={handleChangeChecked}
                name="injection"
                color="primary"
              />
            }
            label="Injection"
          />
        </GridItem>
        {injectionTrue}
      </GridContainer>

      <GridContainer>
        <GridItem xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={historyValues.alcohol}
                onChange={handleChangeChecked}
                name="alcohol"
                color="primary"
              />
            }
            label="Alcohol"
          />
        </GridItem>
        <GridItem xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={historyValues.alcohol}
                onChange={handleChangeChecked}
                name="medication_consumption"
                color="primary"
              />
            }
            label="Medication"
          />
        </GridItem>
        {medicationTrue}
      </GridContainer>
    </div>
  );
}
