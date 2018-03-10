import React from 'react';

import JobPanel from '../global/JobPanel';

import styles from '../../assets/styles/components/History.css';

const History = () => {
    return (
    <section className="[ section  section--history ]  section--style-b">

        <header className="[ section__header ]">

            <h2 className="[ section__heading ]">Where &amp; When</h2>

        </header>

        <div className="[ section__body ]  grid">

            <JobPanel />
            <JobPanel />
            <JobPanel />
            <JobPanel />
            
        </div>

        <div className="[ section__closing ]">
            <a href="/" className="btn  btn--style-c">Curriculum Vitae</a>
        </div>

    </section>
    );
}

export default History;