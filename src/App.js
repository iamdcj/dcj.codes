import React from 'react';

import globalStyles from './assets/styles/App.css';
import sectionStyles from './assets/styles/components/Section.css';

// Globals
import Header from './components/global/Header.jsx';
import Footer from './components/global/Footer.jsx';

// Layouts
import Default from './layouts/Default';

// We need to fetch data from Contentful
// and pass it through to the default component
// in order to switch through components

const appData = {
	"homePage": [
		{
			"componentType": 'Masthead',
		},
		{
			"componentType": 'Introduction'
		},
		{
			"componentType": 'History'
		},
		{
			"componentType": 'Approach'
		}
	]
}

const App = () => {
    return (
    	<div className="[ site-wrapper ]">
	    	
		    <Header />

		    <main className="[ site-main ]" role="main">
		    	<Default content={appData}/>
		    </main>

		    <Footer />
	    	
	    </div>
    );
}

export default App;