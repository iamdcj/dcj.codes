import React from 'react';

import styles from '../../assets/styles/components/Footer.css';

import SocialNavigation from '../navigation/SocialNavigation.jsx';

import logo  from '../../assets/media/logo-orange.svg';

const Footer = () => {
    return (
	    <footer className="[ site-footer ]  grid">

		    <header className="[ section__header ]  grid__item">

	            <h2 className="[ section__heading ]">Kontakt</h2>

	    		<div className="[ section__subtitle ]">
				 	<p>If you would like to get in touch, <a href="mailto:david@dcj.codes" target="blank">give me a shout</a>.</p>
                </div>

	        </header>
	    	
	    	<div className="grid__item">
	    		<SocialNavigation />
	    	</div>

	    	<div className="grid__item"><small className="[ copyright ]">&copy; dcj</small></div>

			<a href="#" className="back-to-top  btn  btn--style-a">Top</a>	


	    </footer>
    );
}

export default Footer;