import React from 'react';

import styles from '../../assets/styles/components/SocialNavigation.css';

const SocialNavigation = () => {
    return (

      	<nav className="[ navigation  navigation--social ]">
      		<h3 className="navigation__title">Social Navigation 1</h3>
      		<ul>
            <li><a href="https://www.linkedin.com/in/david-christian-jones-73063758/" target="_blank">Linkedin</a></li>
      			<li><a href="https://github.com/iamDCJ/" target="_blank">GitHub</a></li>
            <li><a href="https://www.instagram.com/iam.dcj/" target="_blank">Instagram</a></li>
      		</ul>
      	</nav>

    );
}

export default SocialNavigation;