import React from 'react';

import styles from '../../assets/styles/JobPanel.css';


const JobPanel = () => {
    return (
    	<article className="[ card card--job ] grid__item tab--one-half  desk--one-quarter">

    		<div className="card__inner">

    			<div className="card__logo">

	    			<svg id="logo-cube3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.2 33.61">
						<title>logo</title>
						<path id="Shape" class="cls-1" d="M118,16.82a11.2,11.2,0,0,0-4.79-2L121,6H110.7l.06,0c.22.09,1,.46,1.15,1.13a2,2,0,0,1-.5,1.65L104,17.28a11.29,11.29,0,0,1,6.32-1.38l.2,0,.13,0c2.14.29,3.85,1.41,3.85,3.73v8a6.48,6.48,0,0,1-2.22,4.74l-.54.5.73-.08A10.39,10.39,0,0,0,121.2,23,7.51,7.51,0,0,0,118,16.82" transform="translate(0 0)"></path>
						<path id="Shape-2" data-name="Shape" class="cls-1" d="M106,30.33a4.9,4.9,0,0,0,1.1-1A3.75,3.75,0,0,0,108,27a4,4,0,0,0-4.11-4c-2.4,0-3.9,1.73-3.9,4.38,0,3.41,2.85,5.81,7.17,6.23A2.2,2.2,0,0,1,105.57,32a1.46,1.46,0,0,1,.45-1.66" transform="translate(0 0)"></path>
						<path id="Shape-3" data-name="Shape" class="cls-1" d="M102.73,12.36a2.33,2.33,0,0,0,1.84-3.78,2.88,2.88,0,0,0-.63-.61.91.91,0,0,1-.26-1,1.3,1.3,0,0,1,.91-1c-2.46.25-4.59,1.69-4.59,3.74a2.67,2.67,0,0,0,2.73,2.62" transform="translate(0 0)"></path>
						<path id="Shape-4" data-name="Shape" class="cls-1" d="M30.55,27.41v-1l0-1.21V18.45h0V12l-1.1.55a13.44,13.44,0,0,1-5.16,1.13c-.54,0-1.34,0-2.31,0a3.72,3.72,0,0,1,2.06,2.3,12.9,12.9,0,0,1,.2,2.35v8.12a6.81,6.81,0,0,0,7,6.65H32l1.65,0a6.59,6.59,0,0,1-3.15-5.62" transform="translate(0 0)"></path>
						<path id="Shape-5" data-name="Shape" class="cls-1" d="M44.55,27.41v-1l0-1.21V18.45h0V12l-1.1.55a13.44,13.44,0,0,1-5.16,1.13c-.54,0-1.34,0-2.31,0a3.72,3.72,0,0,1,2.06,2.3,12.9,12.9,0,0,1,.2,2.35v8.12a6.81,6.81,0,0,0,7,6.65H46l1.65,0a6.59,6.59,0,0,1-3.15-5.62" transform="translate(0 0)"></path>
						<path id="Shape-6" data-name="Shape" class="cls-1" d="M61.94,13a9.47,9.47,0,0,1,2.37,6.27v6.15a9.51,9.51,0,0,1-4.31,8l.56,0A10.35,10.35,0,0,0,71.09,23c0-5.72-3.74-9.77-9.15-10" transform="translate(0 0)"></path>
						<path id="Shape-7" data-name="Shape" class="cls-1" d="M86.15,13H86a9.48,9.48,0,0,1,2.32,5.2q0,.22,0,.44s0,.06,0,.1,0,.36,0,.55v.5a3.82,3.82,0,0,1-1.17,2.43h7.41v-.73c0-5.31-3.17-8.49-8.47-8.49" transform="translate(0 0)"></path>
						<path id="Shape-8" data-name="Shape" class="cls-1" d="M55.58,27.55V27c0-.46,0-1,0-1.65V18.1h0V16.47h0V12.9h0V0l-1,.48a13.19,13.19,0,0,1-4.46,1.08h-.16l-.5,0a23.78,23.78,0,0,1-2.4,0,3.72,3.72,0,0,1,2.06,2.3A12.74,12.74,0,0,1,49.25,6v5.69h0v6.45h0v2h0v5.91a6.81,6.81,0,0,0,7,6.65h.75l1.65,0a6.6,6.6,0,0,1-3.12-5.14" transform="translate(0 0)"></path>
						<path id="Shape-9" data-name="Shape" class="cls-1" d="M14.65,13a1.59,1.59,0,0,1,1.23,1.13,1,1,0,0,1-.35,1.16,3.59,3.59,0,0,0-.85.71A2.46,2.46,0,0,0,14,17.63a2.93,2.93,0,0,0,3.17,2.77,2.83,2.83,0,0,0,3-3.05c0-2.38-2.2-4-5.53-4.35" transform="translate(0 0)"></path>
						<path id="Shape-10" data-name="Shape" class="cls-1" d="M8.57,31.48A9.47,9.47,0,0,1,6.3,25.33V19.18A9.47,9.47,0,0,1,8.59,13,10,10,0,0,0,0,23.25,9.8,9.8,0,0,0,7,33H7A8.23,8.23,0,0,0,8,33.25l.09,0a21.11,21.11,0,0,0,5.64.19,7,7,0,0,1-5.17-2" transform="translate(0 0)"></path>
						<path id="Shape-11" data-name="Shape" class="cls-1" d="M83.5,31.49a9.47,9.47,0,0,1-2.27-6.16V19.19A9.47,9.47,0,0,1,83.54,13,10,10,0,0,0,75,23.22a10,10,0,0,0,3.07,7.51,10.18,10.18,0,0,0,6.82,2.73,23.87,23.87,0,0,0,3.74,0,7.08,7.08,0,0,1-5.12-1.91" transform="translate(0 0)"></path>
					</svg>


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