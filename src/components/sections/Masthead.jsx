import React from 'react';

import styles from '../../assets/styles/components/Masthead.css';

const Masthead = () => {
    return (
   		<section className="[ masthead ]  grid">

   			<div className="[ masthead__inner ]  grid__item desk--three-quarters">

	    		<h2 className="[ masthead__title ]">Hello</h2>

	    		<div className="[ masthead__subtitle ]">
						<p>I am David Christian Jones, <br /> a front&ndash;end web developer <br />based in the Boston, Massachusetts.</p>
						<p><a href="mailto:david@dcj.codes" target="blank" className="btn  btn--style-b">Get in touch</a></p>
	    		</div>
    		</div>

   		</section>
    );
}

export default Masthead;