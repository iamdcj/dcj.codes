import React from 'react';

import Introduction from '../components/sections/Introduction';
import History from '../components/sections/History';
import Blog from '../components/sections/Blog';

const Home = () => {
    return (
    	<div className="[ layout  layout--home ]">
	    	<Introduction />
		    <History />
		    <Blog />
	    </div>
    );
}


export default Home;