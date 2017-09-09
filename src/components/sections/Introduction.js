import React from 'react';

import styles from './Introduction.css';

const Introduction = () => {
    return (
   		<section className="[ section  section--introduction ]">

   			<header className="section__header">

    			<h2 className="[ section__heading ]">About</h2>

    		</header>

            <div className="[ section__body ]">
                <p>I have over 5 years professional experience building responsive web application <abbr title="User Interfaces">UIs</abbr> for companies, charities and <abbr title="Non-govermental organisations">NGOs</abbr> of all sizes.</p>
            </div>


   		</section>
    );
}

export default Introduction;