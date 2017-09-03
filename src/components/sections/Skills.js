import React from 'react';

import styles from './Skills.css';

const Skills = () => {
    return (
   		<section className="[ section  section--skills ]">

    		<header className="section__header">
    			<h2 className="[ section__heading ]">Good. Bad. Shite.</h2>
    			<div className="[ section__subtitle ]">

    				<p>Front-end web development is an ever-evolving discipline, and it can be tricky to keep track of all the new and shiny things&hellip;so I don&rsquo;t really bother with that, I just concentrate on the key aspects front-end web development.</p>

    				<p>Here is what I know, what I want to know, and what I (probably) never will know:</p>

    			</div>
    		</header>


    		<div className="section__body  grid">

                <div className="[ list-block ]  grid__item  tab--one-third">
                    <h5>Proficient</h5>
                    <ul>
                        <li><abbr title="Hyper-text Markup Language">HTML</abbr></li>
                        <li><abbr title="Cascading Style Sheets">CSS</abbr>	(Less and Sass)</li>
                        <li>JavaScript (jQuery)</li>
                        <li>Gulp and Grunt</li>
                    </ul>
                </div>

                <div className="[ list-block ]  grid__item  tab--one-third">
                    <h5>Improving</h5>                    
                    <ul>
                        <li><abbr title="ECMAScript">ES</abbr>.Next (ES6 onwards)</li>
                        <li>ReactJS (and Redux)</li>
                        <li>Webpack</li>
                    </ul>
                </div>

                <div className="[ list-block ]  grid__item  tab--one-third">
                    <h5>Shite</h5>                    
                    <ul>
                        <li>.NET</li>
                        <li>Java</li>
                        <li>Project Management</li>
                    </ul>
                </div>

    		</div>

   		</section>


    );
}

export default Skills;