import React from 'react';

import Masthead from '../components/sections/Masthead.jsx';
import Introduction from '../components/sections/Introduction.jsx';
import Approach from '../components/sections/Approach.jsx';
import History from '../components/sections/History.jsx';


import logo  from '../assets/media/logo-orange.svg';

const Home = () => {
    return (
    	<div className="[ layout  layout--home ]">
	    	<Masthead />
	    	<div className="inner-wrapper">
	    		<div className="inner-action">
	    			<a className="[ site-logo ]" href="#">dcj</a>
	    		</div>
	    	<Introduction />	    	
	    	<Approach /> 	
	    	</div>
	    </div>
    );
}

export default Home;