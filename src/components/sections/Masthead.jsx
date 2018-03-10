import React from 'react';

import styles from '../../assets/styles/components/Masthead.css';

import SocialNavigation from '../navigation/SocialNavigation';

import backgroundSmall  from '../../assets/media/bg-mob.jpg';
import background  from '../../assets/media/bg.jpg';

console.log(background);

const Masthead = () => {
    return (
   		<section className="[ masthead ]  grid">

   			<div className="[ masthead__inner ]  grid__item desk--three-quarters">

	    		<h2 className="[ masthead__title ]">Hello</h2>

	    		<p className="[ masthead__subtitle ]">I am David Christian Jones, <br /> a modern front&ndash;end web developer <br />based in the North of England.</p>
	    		
    		</div>

   		</section>
    );
}

export default Masthead;