import React from 'react';

import resetStyles from './Reset.css';
import globalStyles from './App.css';

// Globals
import Header from './components/global/Header';
import Footer from './components/global/Footer';

// Layouts
import Home from './layouts/Home';

const App = () => {
    return (
    	<div className="[ site-wrapper ]">
	    	<Header />
		    
		    <main className="[ site-main ]" role="main">
		    	<Home />
		    </main>

	    	<Footer />
	    </div>
    );
}

export default App;