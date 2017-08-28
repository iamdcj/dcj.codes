import React from 'react';

import styles from './SocialNavigation.css';

const SocialNavigation = () => {
    return (

      	<nav className="[ navigation  navigation--social ]">
      		<h3 className="navigation__title">Main Navigation</h3>
      		<ul>
      			<li><a href="https://github.com/iamDCJ/">GitHub</a></li>
      			<li><a href="https://twitter.com/iamdcj">Twitter</a></li>
      			<li><a href="https://instagram.com/iam.dcj">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/david-christian-jones-73063758/">Linkedin</a></li>
      		</ul>
      	</nav>

    );
}

export default SocialNavigation;