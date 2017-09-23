import React from 'react';

import styles from '../../assets/styles/Footer.css';

import SocialNavigation from '../navigation/SocialNavigation.jsx';

import logo  from '../../assets/media/logo-orange.svg';

const Footer = () => {
    return (
	    <footer className="[ site-footer ]  grid">

		    <header className="section__header  grid__item">

	            <h2 className="[ section__heading ]">Kontakt</h2>

	        </header>
	    	
	    	<div className="grid__item">
	    		<a href="mailto:david@dcj.codes" className="btn  btn--style-a">david@dcj.codes</a>
	    		
	    		<SocialNavigation />

	    	</div>

	    	<div className="grid__item"><small className="[ copyright ]">&copy; dcj</small></div>


	    </footer>
    );
}

export default Footer;