import React from 'react';

// Globals
import Header from './components/global/Header';
import Footer from './components/global/Footer';

// Layouts
import Home from './layouts/Home';

const App = () => {
    return (
    	<div className="site-wrapper">
	    	<Header />
		    
		    <main className="site-main">
		    	<Home />
		    </main>

	    	<Footer />
	    </div>
    );
}

export default App;