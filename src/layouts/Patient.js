import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Navbar from 'components/Navbars/Navbar';
import Footer from 'components/Footer/Footer';
import Sidebar from 'components/Sidebar/Sidebar';

import { patientDashboardRoutes } from 'routes.js';

import styles from 'assets/jss/material-dashboard-react/layouts/adminStyle';

import cliniquelogo from 'assets/img/cliniquelogo.png';
import * as PusherPushNotifications from '@pusher/push-notifications-web';
import { getUser, getToken } from 'lib/utils/helpers';
import SERVER_URL from 'lib/utils/constants';

let ps;

const switchRoutes = (
  <Switch>
    {patientDashboardRoutes.map((prop) => {
      if (prop.layout === '/patient') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            // key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/patient" to="/patient/DisplayPatientMedRec" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Doctor({ ...rest }) {
  const routes = patientDashboardRoutes;
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  const token = getToken();
  const { uid } = getUser();
  const beamsTokenProvider = new PusherPushNotifications.TokenProvider({
    url: `${SERVER_URL}/api-appointment/beams-auth/`,
    headers: {
      Authorization: `token ${encodeURIComponent(token)}`,
    },
  });
  const beamsClient = new PusherPushNotifications.Client({
    instanceId: 'bf43c259-1895-47cd-83cf-82461abe58b5',
  });

  beamsClient
    .start()
    .then(() => beamsClient.setUserId(uid, beamsTokenProvider))
    // .then((beamsClientArg) => beamsClientArg.getDeviceId())
    // .then((deviceId) =>
    //   console.log('Successfully registered with Beams. Device ID:', deviceId),
    // )
    .then(() => beamsClient.addDeviceInterest(uid))
    // eslint-disable-next-line no-console
    .catch(console.error);
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText="E-CLINIQUE"
        logo={cliniquelogo}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color="green"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          color="success"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
        <div className={classes.content}>
          <div className={classes.container}>{switchRoutes}</div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
