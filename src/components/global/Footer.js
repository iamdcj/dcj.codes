import React from 'react';

import styles from './Footer.css';

import SocialNavigation from '../navigation/SocialNavigation';

const Footer = () => {
    return (
	    <footer className="[ site-footer ]  grid">

	    	<small className="[ copyright ]  grid__item  one-quarter  tab--two-thirds">&copy; dcj</small>

	    	<SocialNavigation />

	    </footer>
    );
}

export default Footer;