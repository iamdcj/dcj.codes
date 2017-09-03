import React from 'react';

import styles from './Introduction.css';

const Introduction = () => {
    return (
   		<section className="[ section  section--introduction ]">

   			<header className="section__header">
    			<h2 className="[ section__heading ]">What I do.</h2>
    			<div className="[ section__subtitle ]">

                <p>For the past few years I have spent my working day building the front-end of multi-scale web applications for both small and large companies, charities and <abbr title="Non-govermental organisations">NGOs</abbr>. I approach each project, irrespective of size, in a <abbr title="Don't Repeat Yourself">DRY</abbr>, modular fashion  &ndash; resulting in good, clean code(readable, maintainable and scalable).</p>

                <p>I am currently doing the above over at <a href="http://www.building-blocks.com" target="blank" className="btn ">Building Blocks</a>, UK.</p>

                </div>
    		</header>

   		</section>
    );
}

export default Introduction;