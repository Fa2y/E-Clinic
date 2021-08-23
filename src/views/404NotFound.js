import React from 'react';
import cliniquelogo from 'assets/img/cliniquelogo.png';

const PageNotFound = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }} id="wrapper">
    <h1 style={{ alignSelf: 'center' }}>404 Not Found!</h1>
    <div id="info" style={{ alignSelf: 'center' }}>
      <h3>This page could not be found</h3>
    </div>
    <img
      style={{ alignSelf: 'center', width: '25%', height: '25%' }}
      src={cliniquelogo}
      alt="..."
    />
  </div>
);

export default PageNotFound;
