import React from 'react';

import styles from './Header.css';

import MainNavigation from '../navigation/MainNavigation';


const Header = () => {
    return (
      <header className="[ site-header ]" role="header">
      	<a className="[ site-logo ]" href="#" class="logo">DCJ</a>
      	<MainNavigation />
      </header>
    );
}

export default Header;