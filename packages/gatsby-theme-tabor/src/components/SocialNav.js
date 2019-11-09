import React from 'react';
import { Twitter, Website } from './Icons';
//TODO: make it dynamic

const SocialNav = () => (
  <nav className="social-navigation" aria-label="Social Menu">
    <div className="menu-social-container">
      <ul
        id="menu-social"
        className="header-font medium smooth gray list-reset"
      >
        <li
          id="menu-item-351"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-351"
        >
          <a href="http://twitter.com/benunc">
            <span className="screen-reader-text">Twitter account</span>
            <Twitter />
          </a>
        </li>
       
      </ul>
    </div>
  </nav>
);

export default SocialNav;
