import React from 'react';

import MainNavigation from '../navigation/MainNavigation';

const Header = () => {
    return (
      <header className="[ site-header ]">
      	<MainNavigation />
      	<a href="#" class="logo">DCJ</a>
      	<h2>Front-end Web Developer</h2>
      </header>
    );
}

export default Header;