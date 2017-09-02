import React from 'react';

import styles from './Masthead.css';

import SocialNavigation from '../navigation/SocialNavigation';

const Masthead = () => {
    return (
   		<section className="[ masthead ]  grid">

   			<div className="masthead__inner  grid__item  desk--two-thirds">
	    		<h2 className="[ masthead__title ]">Hello</h2>

	    		<p className="[ masthead__subtitle ]">I am David Christian Jones, a Manchester&ndash;based <br/> front&ndash;end web developer.</p>

	    		<a href="mailto:david@dcj.codes" className="btn  btn--style-b">Get in touch &#8594;</a>

    		</div>
   		</section>
    );
}

export default Masthead;