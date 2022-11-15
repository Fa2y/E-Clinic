import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from 'assets/img/clinique.jpg';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem.js';
import CardHeader from 'components/Card/CardHeader';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    width: '50%',
  },
  content: {
    marginLeft: '1.5vh',
  },
  content1: {
    marginLeft: '1.5vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
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
}));

export default function FetchClinicalExam({ values }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card>
      <GridContainer>
        <GridItem xs={7}>
          {values?.clinical_exam && (
            <div className={classes.content}>
              <h3 align="center">Clinical Examination</h3>
              <p className={classes.text}>{values?.clinical_exam}</p>
            </div>
          )}
          <br />
          <br />
          <br />
          <br />
          {values?.paraclinical_exam && (
            <div className={classes.content1}>
              <h3 align="center">Paraclinical Examination</h3>
              <a href={values?.paraclinical_exam} target="_blank">
                <DescriptionIcon style={{ fontSize: 100, marginTop: '5%' }} />
              </a>
            </div>
          )}
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
  );
}
