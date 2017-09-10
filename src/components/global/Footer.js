import React from 'react';

import styles from '../../assets/styles/Footer.css';

import SocialNavigation from '../navigation/SocialNavigation';

import logo  from '../../assets/media/logo.svg';

const Footer = () => {
    return (
	    <footer className="[ site-footer ]  grid">

	    	<div className="grid__item  one-third  tab--two-thirds"><small className="[ copyright ]">&copy; <img src={logo} className="logo  logo--small"/></small></div>

	    	<SocialNavigation />

	    </footer>
    );
}

export default Footer;