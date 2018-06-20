import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export const AppLayout = ({ children }) => (
  <div>
    Private Layout
    <div className="container">{children}</div>
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
