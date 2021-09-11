import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from 'assets/img/clinique.jpg';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem.js';
import CardHeader from 'components/Card/CardHeader';

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

export default function FetchClinicalExam() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card>
      <GridContainer>
        <GridItem xs={7}>
          <div className={classes.content}>
            <h3 align="center">Clinical Examination</h3>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborumdqsdqsdsqdqsdqsdqs numquam blanditiis harum
              quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
              rerumdsqdqsdqs ! Provdqssssssssdsqdqsdsqd dsqdqsd dsqdqisquam eius
              sed odit fugiat iusto fuga praesentium optio, eaque rerumdsqdqsdqs
             sqdqsd dsqdq
              dsqdidentdqsssssssssssssssssss
              umdsqdqsdqs ! Prov
            </p>
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
  );
}
