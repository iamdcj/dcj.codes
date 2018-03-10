import React from 'react';

import styles from '../../assets/styles/components/MainNavigation.css';

const MainNavigation = () => {
	return (

		<nav className="[ navigation  navigation--main ]">
			<h3 className="[ navigation__title ]">Main Navigation</h3>

			<ul>
				<li>About</li>
				<li>History</li>
				<li>Blog</li>
			</ul>
		  
		</nav>

	);
}

export default MainNavigation;