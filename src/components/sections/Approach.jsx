import React from 'react';

import styles from '../../assets/styles/components/Introduction.css';

const Approach = () => {
    return (
      <section className="[ section  section--approach ]">

        <header className="[ section__header ]">
          
                <h2 className="[ section__heading ]">About</h2>

                <div className="[ section__subtitle ]">
                  <p>I have over five years commercial experience combining <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr> and JavaScript to create modular, scalable web applications for companies, charities, and <abbr title="Non-governmental organization">NGOs</abbr> of all sizes.</p>
                </div>

                <div className="[ section__closing ]">
                    <p>I am currently available for hire, <a href="mailto:david@dcj.codes" target="blank">get in touch</a>.</p>
                </div>
          
        </header>

      </section>
    );
}

export default Approach;

