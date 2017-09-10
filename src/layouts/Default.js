import React from 'react';

import Masthead from '../components/sections/Masthead';
import Introduction from '../components/sections/Introduction';
import Approach from '../components/sections/Approach';
import History from '../components/sections/History';
import Skills from '../components/sections/Skills';


import logo  from '../assets/media/logo-orange.svg';

const Home = () => {
    return (
    	<div className="[ layout  layout--home ]">
	    	<Masthead />
	    	<div className="inner-wrapper">
	    		<div className="inner-action">
	    			<a className="[ site-logo ]" href="#"><img src={logo} /><span>David Christian Jones</span></a>
	    		</div>
	    	<Introduction />	    	
	    	<Approach />
	    	<Skills />
	    	</div>
	    </div>
    );
}

export default Home;