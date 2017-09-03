import React from 'react';

import styles from './Footer.css';

import SocialNavigation from '../navigation/SocialNavigation';

const Footer = () => {
    return (
	    <footer className="[ site-footer ]  grid">

	    	<div className="grid__item  one-quarter  tab--two-thirds"><small className="[ copyright ]">&copy; dcj</small></div>

	    	<SocialNavigation />

	    </footer>
    );
}

export default Footer;