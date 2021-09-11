import React, { useState, useContext, useEffect } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextField from 'components/controls/Input';
import medRec from '../medRec';

export default function FetchTobacoConsumption(props) {
  const [checkedValues, setCheckedValues] = React.useState({
    smoking: medRec.Aymen[0].smoking,
    chewing: medRec.Aymen[0].chewing,
    injection: medRec.Aymen[0].injection,
    oldSmoker: medRec.Aymen[0].oldSmoker,
    alcohol: medRec.Aymen[0].alcohol,
    medication_consumption: medRec.Aymen[0].medication_consumption,
  });
  const [edited_values, setEdited] = React.useState();
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
      setEdited({
        ...edited_values,
        [event.target.name]: event.target.value,
      });
      let targetName = event.target.name;
      props.handleClick(historyValues[targetName], targetName);
    }
  };
  const handleChangeChecked = (event) => {
    if (event?.target) {
      setCheckedValues({
        ...checkedValues,
        [event.target.name]: event.target.checked,
      });
      setEdited({
        ...edited_values,
        [event.target.name]: event.target.checked,
      });
      let targetName = event.target.name;
      props.handleClick(!checkedValues[targetName], targetName);
    }
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedValues.smoking}
                onChange={handleChangeChecked}
                name="smoking"
                color="primary"
              />
            }
            label="Smoking"
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={6} sm={3}>
          <TextField
            name="smokingNumberUnits"
            label={"Number units : " + medRec.Aymen[0].smokingNumberUnits}
            onChange={handleChange}
            //value={values.number_units}
            fullwidth
          />
        </GridItem>
        <GridItem xs={6} sm={3}>
          <TextField
            name={"ageFc : "+ medRec.Aymen[0].smokingNumberUnits}
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
                checked={checkedValues.oldSmoker}
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
            label={"Duration : "+ medRec.Aymen[0].duration}
            onChange={handleChange}
            //value={values.number_units}
            fullwidth
          />
        </GridItem>
      </GridContainer>
      <br></br>
      <GridContainer>
        <GridItem xs={6} sm={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedValues.chewing}
                onChange={handleChangeChecked}
                name="chewing"
                color="primary"
              />
            }
            label="Chewing"
          />
        </GridItem>
        <GridItem xs={6} sm={3}>
          <TextField
            name="chewingNumberUnits"
            label={"Number Units : "+ medRec.Aymen[0].chewingNumberUnits}
            onChange={handleChange}
            //value={values.number_units}
            fullwidth
          />
        </GridItem>
      </GridContainer>
    <br></br>
      <GridContainer>
        <GridItem xs={6} sm={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedValues.injection}
                onChange={handleChangeChecked}
                name="injection"
                color="primary"
              />
            }
            label="Injection"
          />
        </GridItem>
        <GridItem xs={6} sm={3}>
          <TextField
            name="injectionNumberUnits"
            label={"number Units : "+ medRec.Aymen[0].injectionNumbernits}
            onChange={handleChange}
            //value={values.number_units}
            fullwidth
          />
        </GridItem>
      </GridContainer>
       <br></br>
      <GridContainer>
        <GridItem xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedValues.alcohol}
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
                checked={checkedValues.alcohol}
                onChange={handleChangeChecked}
                name="medication_consumption"
                color="primary"
              />
            }
            label="Medication"
          />
        </GridItem>
        <GridItem xs={3}>
          <TextField
            name="medication"
            label={"Medication name : "+ medRec.Aymen[0].medication}
            onChange={handleChange}
            //value={values.number_units}
            fullwidth
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
