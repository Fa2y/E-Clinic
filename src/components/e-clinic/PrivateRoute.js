import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isUserAuthenticated, getUser } from 'lib/utils/helpers';

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isUserAuthenticated) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }
      console.log(roles);
      // check if user match the specified role
      if (roles?.includes(getUser()?.role)) {
        // authorised so return component
        return <Component {...props} />;
      }

      // role not authorised so redirect to home page
      return <Redirect to={{ pathname: '/' }} />;
    }}
  />
);

export default PrivateRoute;
