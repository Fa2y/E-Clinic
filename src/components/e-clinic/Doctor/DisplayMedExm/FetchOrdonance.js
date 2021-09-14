import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Typography from '@material-ui/core/Typography';
import image from 'assets/img/ordonance.jpg';
import { Table, TableCell, TableRow, TableBody } from '@material-ui/core';
import { getUser } from 'lib/utils/helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  content: {
    marginLeft: '1.5vh',
  },
  media: {
    maxWidth: '100%',
    height: '10vh',
    paddingTop: '100%',
  },

  title: {
    height: '50px',
    fontStyle: 'italic',
  },
  text: {
    fontStyle: 'italic',
    fontSize: '3vh',
  },
  header: {
    marginLeft: '8vh',
  },
  header2: {
    marginLeft: '4vh',
  },
}));
export default function FetchOrdonance({ values }) {
  const classes = useStyles();
  const user = getUser();
  const listItems = values?.ordanance?.map((number, index) => (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell align="left">{number.medicament}</TableCell>
          <TableCell align="right">{number.time}</TableCell>
          <TableCell align="right">{number.duration} days</TableCell>
          <TableCell align="right">{number.nbPerDay} times per day</TableCell>
          <TableCell align="right">{number.nbUnit} units</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ));
  return (
    <div>
      <Card>
        <GridContainer>
          <GridItem xs={7}>
            <div className={classes.content}>
              <h3 align="center">Medical prescription</h3>
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <div className={classes.header2}>
                    <p>
                      <strong>{`Patient : ${values?.patient_data?.user?.first_name} ${values?.patient_data?.user?.last_name}`}</strong>
                    </p>
                    <p>
                      <strong>
                        Age :{' '}
                        {new Date().getFullYear() -
                          new Date(
                            values?.patient_data?.user?.date_of_birth,
                          ).getFullYear()}
                      </strong>
                    </p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.header}>
                    <p>
                      <strong>{`Dr.${user?.last_name} ${user?.first_name}`}</strong>
                    </p>
                    <p>
                      <strong>Date : {values?.date}</strong>
                    </p>
                  </div>
                </GridItem>
              </GridContainer>
              {listItems}
            </div>
          </GridItem>
          <GridItem xs={5}>
            <CardMedia
              className={classes.media}
              image={image}
              title="Live from space album cover"
            />
          </GridItem>
        </GridContainer>
      </Card>
    </div>
  );
}
