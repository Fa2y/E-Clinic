import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Typography from '@material-ui/core/Typography';
import image from 'assets/img/orientation.jpg';

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
export default function FetchOrientation(props) {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <GridContainer>
          <GridItem xs={7}>
            <div className={classes.content}>
              <h3 align="center">Orientation</h3>
              <GridContainer>
                <GridItem xs={6} sm={12} md={6}>
                  <div className={classes.header2}>
                    <p>
                      <strong>Patient : Benmammar Houssam</strong>
                    </p>
                    <p>
                      <strong>Age : 22</strong>
                    </p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.header}>
                    <p>
                      <strong>Doctor : Brahimi</strong>
                    </p>
                    <p>
                      <strong>Date : 21/07/2021</strong>
                    </p>
                  </div>
                </GridItem>
              </GridContainer>
              <p className={classes.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
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
    </div>
  );
}
