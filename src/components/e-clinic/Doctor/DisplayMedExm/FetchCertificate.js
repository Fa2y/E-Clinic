import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';
import image from 'assets/img/certificate.jpg';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    width: '50%',
  },
  content: {
    marginLeft: '3vh',
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
export default function FetchCertificate(props) {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <GridContainer>
          <GridItem>
            <h3 align="center">Medical Certificate</h3>
            <div>
              <div>
                <div className={classes.content}>
                  <p>To Whom It May Concern</p>
                  <p>
                    This is to certify that <strong> Aymen Djebbar</strong>
                  </p>
                  <p>
                    Was seen in my clinic on <strong>2021-07-22</strong> with
                    the following diagnosis :<br></br>
                    <br></br>
                    <strong>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis 
                    </strong>
                  </p>
                  <p>
                    The patient requires <strong>4</strong> days for to rest and
                    heal.
                    <br></br>
                    <br></br>
                    Seen by Dr :<strong> houssem</strong>
                    <br></br>
                    <br></br>
                    Dr’s Signature
                  </p>
                </div>
              </div>
            </div>
          </GridItem>
          {/* <GridItem xs={5}>
            <CardMedia
              className={classes.media}
              image={image}
              title="Live from space album cover"
            />
          </GridItem> */}
        </GridContainer>
      </Card>
    </div>
  );
}
