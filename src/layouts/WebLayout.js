import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export const WebLayout = ({ children }) => (
  <div>
    <Header />
    <div className="container">{children}</div>
  </div>
);

WebLayout.propTypes = {
  children: PropTypes.node,
};

export default WebLayout;
