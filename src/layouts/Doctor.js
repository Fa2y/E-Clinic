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

import { doctorDashboardRoutes } from 'routes.js';

import styles from 'assets/jss/material-dashboard-react/layouts/adminStyle';

import cliniquelogo from 'assets/img/cliniquelogo.png';

let ps;

const switchRoutes = (
  <Switch>
    {doctorDashboardRoutes.map((prop) => {
      if (prop.layout === '/doctor') {
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
    <Redirect from="/doctor" to="/doctor/FetchMedicalRecord" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Doctor({ ...rest }) {
  const routes = doctorDashboardRoutes;
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
        color="blue"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
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
