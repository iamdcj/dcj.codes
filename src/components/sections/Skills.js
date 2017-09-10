import React from 'react';

import styles from '../../assets/styles/Skills.css';

const Skills = () => {
    return (
   		<section className="[ section  section--skills ]">

    		<header className="section__header">

    			<h2 className="[ section__heading ]">Skills</h2>
    				
    			<div className="[ section__subtitle ]">
    				<p>Here is what I do know, what I want to know,<br /> and what I (probably) never will know:</p>
    			</div>

    		</header>

    		<div className="section__body  grid">

                <div className="[ list-block ]  grid__item  phab--one-third">
                    <h5>Good</h5>
                    <ul>
                        <li><abbr title="HyperText Markup Language">HTML</abbr>[5]</li>
                        <li><abbr title="Cascading Style Sheets">CSS</abbr>[3]	(Less and Sass)</li>
                        <li>JavaScript (jQuery)</li>
                        <li>Gulp and Grunt</li>
                    </ul>
                </div>

                <div className="[ list-block ]  grid__item  phab--one-third">
                    <h5>Improving</h5>                    
                    <ul>
                        <li><abbr title="ECMAScript">ES</abbr>.Next (ES6 onwards)</li>
                        <li>ReactJS (and Redux)</li>
                        <li>Webpack</li>
                    </ul>
                </div>

                <div className="[ list-block ]  grid__item  phab--one-third">
                    <h5>Shite</h5>                    
                    <ul>
                        <li>.NET</li>
                        <li>Java</li>
                        <li>Project Management</li>
                    </ul>
                </div>

    		</div>

    		<div className="section__closing">
                <p>I am currently doing all of the above over at <a href="http://www.building-blocks.com" target="blank">Building Blocks</a>.</p>
    		</div>

   		</section>


    );
}

export default Skills;