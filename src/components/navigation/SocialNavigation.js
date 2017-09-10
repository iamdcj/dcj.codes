import React from 'react';

import styles from '../../assets/styles/SocialNavigation.css';

const SocialNavigation = () => {
    return (

      	<nav className="[ navigation  navigation--social ]  grid__item  two-thirds  tab--one-third">
      		<h3 className="navigation__title">Social Navigation</h3>
      		<ul>
      			<li><a href="https://github.com/iamDCJ/" target="_blank">GitHub</a></li>
      			<li><a href="https://twitter.com/iamdcj" target="_blank">Twitter</a></li>
      			<li><a href="https://instagram.com/iam.dcj" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/david-christian-jones-73063758/" target="_blank">Linkedin</a></li>
      		</ul>
      	</nav>

    );
}

export default SocialNavigation;