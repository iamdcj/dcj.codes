import React from 'react';

import styles from './Masthead.css';

import SocialNavigation from '../navigation/SocialNavigation';

const Masthead = () => {
    return (
   		<section className="[ masthead ]">

   			<div className="masthead__inner">
	    		<h2 className="[ masthead__title ]">Hello</h2>

	    		<p className="[ masthead__subtitle ]">I am David Christian Jones, a Manchester&ndash;based front&ndash;end developer current building application user interfaces for small-to-global companies over at <a href="http://www.building-blocks.com" className="btn  btn--style-a">Building Blocks</a>.
				</p>

	    		<a href="mailto:david@dcj.codes" className="btn  btn--style-b">Get in touch &#8594;</a>
    		</div>

        <SocialNavigation />
   		</section>
    );
}

export default Masthead;