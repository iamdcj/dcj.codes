import React from 'react';



import globalStyles from './assets/styles/App.css';


// Globals
import Header from './components/global/Header.jsx';
import Footer from './components/global/Footer.jsx';

// Layouts
import Default from './layouts/Default';

const App = () => {
    return (
    	<div className="[ site-wrapper ]">
	    	
		    <Header />
		    <main className="[ site-main ]" role="main">
		    	<Default />
		    </main>

		    <Footer />
	    	
	    </div>
    );
}

export default App;