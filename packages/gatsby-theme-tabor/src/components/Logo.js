import React from 'react';
import { Link } from 'gatsby';
import wpsLogo from '../images/WPStew.png';

const Logo = ({ data }) => (
  <Link to="/" className="custom-logo-link site-logo" rel="home" itemProp="url">
    <img
      src={wpsLogo}
      alt="WPS in white all caps lettering on a black circular background"
      width="150"
      height="150"
      className="custom-logo initial loaded"
      itemProp="logo"
    />
  </Link>
);

export default Logo;
