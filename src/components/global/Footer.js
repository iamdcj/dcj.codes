import React from 'react';

import styles from './Footer.css';

import SocialNavigation from '../navigation/SocialNavigation';

const Footer = () => {
    return (
	    <footer className="[ site-footer ]">

	    	<small className="copyright">&copy; DCJ</small>

	    	<SocialNavigation />

	    </footer>
    );
}

export default Footer;