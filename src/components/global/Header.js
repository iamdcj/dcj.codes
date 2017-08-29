import React from 'react';

import styles from './Header.css';

import MainNavigation from '../navigation/MainNavigation';


const Header = () => {
    return (
      <header className="[ site-header ]" role="header">
      	<a className="[ site-logo ]" href="#" class="logo"><span>d</span><span>c</span><span>j</span></a>
      </header>
    );
}

export default Header;