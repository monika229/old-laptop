import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      {/* isLoggedIn={props.isAuthenticated} was written after */}
      <Navigation   />
    </header>
  );
};

export default MainHeader;
