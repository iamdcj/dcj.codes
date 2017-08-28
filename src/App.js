import React from 'react';

import resetStyles from './Reset.css';
import globalStyles from './App.css';

// Globals
import Header from './components/global/Header';
import Footer from './components/global/Footer';

// Layouts
import Default from './layouts/Default';

const App = () => {
    return (
    	<div className="[ site-wrapper ]">
	    	
		    
		    <main className="[ site-main ]" role="main">
		    	<Default />
		    </main>

	    	
	    </div>
    );
}

export default App;