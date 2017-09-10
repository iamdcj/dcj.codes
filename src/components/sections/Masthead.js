import React from 'react';

import styles from '../../assets/styles/Masthead.css';

import SocialNavigation from '../navigation/SocialNavigation';

import backgroundSmall  from '../../assets/media/bg-mob.jpg';
import background  from '../../assets/media/bg.jpg';

console.log(background);

const Masthead = () => {
    return (
   		<section className="[ masthead ]  grid">

   			<div className="masthead__inner  grid__item tab--three-quarters">
	    		<h2 className="[ masthead__title ]">Hello</h2>

	    		<p className="[ masthead__subtitle ]">I am David Christian Jones, a modern front&ndash;end web developer based in the North of England.</p>

	    		<a href="mailto:david@dcj.codes" className="btn  btn--style-b">Get in touch &#8594;</a>
	    		
    		</div>

    		<picture className="masthead__bg">
    			<source media="(min-width: 768px)" srcSet={background}/>
				<img srcSet={backgroundSmall} src={background} alt="Slide Image" />
			</picture>
   		</section>
    );
}

export default Masthead;