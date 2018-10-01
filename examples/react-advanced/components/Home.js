import React, { Fragment as F } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <F>
    <h1>Home Page!</h1>
    <Link to="/about">About Page Link</Link>
  </F>
);
