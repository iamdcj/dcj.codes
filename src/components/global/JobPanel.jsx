import React from 'react';

import styles from '../../assets/styles/JobPanel.css';


const JobPanel = () => {
    return (
    	<article className="[ card card--job ] grid__item tab--one-half">

    		<div className="card__inner">

    			<div className="card__logo">

				</div>

				<div className="card__header">
      				<h3 className="card__title">Building Blocks</h3>
      				<h5 className="card_subtitle">Front End Web Developer</h5>
      			</div>
      			
      			<div className="card__body">	
      				<p>Something something ITG and Adidas.</p>
      			</div>
      		</div>
      	</article>
    );
}

export default JobPanel;