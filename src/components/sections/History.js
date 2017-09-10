import React from 'react';

import JobPanel from '../global/JobPanel';

import styles from '../../assets/styles/History.css';

const History = () => {
    return (
    <section className="[ section  section--history ]  section--style-b">

    	<header className="section__header">
    		<h2 className="[ section__heading ]">Where Ive been.</h2>
    	</header>

    	<div className="section__body  grid">

            <p className="[ section__subtitle ]">I have done the above at the following agencies:</p>

    		<JobPanel />
    		<JobPanel />
    		<JobPanel />
    		<JobPanel />
            
    	</div>

    </section>
    );
}

export default History;