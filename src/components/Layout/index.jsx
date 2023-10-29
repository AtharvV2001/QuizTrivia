import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className='main-body'>{children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
