import React from 'react';

import styles from './Masthead.css';

import SocialNavigation from '../navigation/SocialNavigation';

const Masthead = () => {
    return (
   		<section className="[ masthead ]">

   			<div className="masthead__inner">
	    		<h2 className="[ masthead__title ]">Hello</h2>

	    		<p className="[ masthead__subtitle ]">I am David Christian Jones, a front end developer with over five years experience building application user-interfaces for small-to-global companies and non-profits.
				</p>

	    		<a href="mailto:david@dcj.codes" className="btn">Get in touch</a>
    		</div>

        <SocialNavigation />
   		</section>
    );
}

export default Masthead;