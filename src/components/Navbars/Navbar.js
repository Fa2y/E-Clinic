import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
// @material-ui/icons
import Menu from '@material-ui/icons/Menu';
// hooks
import { useRouteName } from 'hooks';
// core components
import styles from 'assets/jss/material-dashboard-react/components/headerStyle';
import Button from 'components/CustomButtons/Button';
import AdminNavbarLinks from './AdminNavbarLinks';
import RTLNavbarLinks from './RTLNavbarLinks';

const useStyles = makeStyles(styles);

export default function Header({ rtlActive, color, handleDrawerToggle }) {
  const classes = useStyles();
  const routeName = useRouteName();
  const appBarClasses = classNames({
    [` ${classes[color]}`]: color,
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color="transparent" href="#" className={classes.title}>
            {routeName}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          {rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
};
Header.defaultProps = {
  color: 'info',
  rtlActive: false,
  handleDrawerToggle: PropTypes.func,
};
