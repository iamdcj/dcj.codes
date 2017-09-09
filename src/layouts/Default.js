import React from 'react';

import Masthead from '../components/sections/Masthead';
import Introduction from '../components/sections/Introduction';
import Approach from '../components/sections/Approach';
import History from '../components/sections/History';
import Skills from '../components/sections/Skills';

const Home = () => {
    return (
    	<div className="[ layout  layout--home ]">
	    	<Masthead />
	    	<Introduction />	    	
	    	<Approach />
	    	<Skills />
	    </div>
    );
}

export default Home;