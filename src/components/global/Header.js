import React from 'react';

import styles from './Header.css';

import MainNavigation from '../navigation/MainNavigation';


const Header = () => {
    return (
      <header className="[ site-header ]  grid" role="header">
      	<h1><a className="[ site-logo ]" href="#"><span>D</span><span>C</span><span>J</span></a></h1>
      </header>
    );
}

export default Header;