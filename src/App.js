import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/e-clinic/PrivateRoute';
import Admin from 'layouts/Admin';
import Doctor from 'layouts/Doctor';
import SignUp from 'views/Auth/SignUp';
import Login from 'views/Auth/Login';
import PageNotFound from 'views/404NotFound';

// SWR global config
import { SWRConfig } from 'swr';

// Toastify for notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './views/Home';
import About from './views/About';

import 'assets/css/material-dashboard-react.css?v=1.10.0';

function App() {
  return (
    <div>
      <Router>
        <SWRConfig
          value={{
            refreshInterval: 0,
            shouldRetryOnError: false,
            revalidateOnFocus: false,
          }}
        >
          <ToastContainer
            position="bottom-left"
            autoClose={7000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route path="/about">
              <About />
            </Route>
            <PrivateRoute
              path="/admin"
              component={Admin}
              roles={['GRH', 'Admin']}
            />
            <PrivateRoute
              path="/doctor"
              component={Doctor}
              roles={['Doctor', 'Nurse']}
            />
            <PrivateRoute
              path="/patient"
              component={Admin}
              roles={['Patient']}
            />
            <Route component={PageNotFound} />
          </Switch>
        </SWRConfig>
      </Router>
    </div>
  );
}

export default App;
