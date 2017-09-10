import React from 'react';

import styles from '../../assets/styles/Header.css';

import MainNavigation from '../navigation/MainNavigation';

import logo  from '../../assets/media/logo.svg';

const Header = () => {
    return (
      <header className="[ site-header ]  grid" role="header">
      	<h1 className="[ site-logo ]"><a href="#"><img src={logo} /><span>David Christian Jones</span></a></h1>
      </header>
    );
}

export default Header;