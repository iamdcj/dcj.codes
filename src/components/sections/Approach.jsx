import React from 'react';

import styles from '../../assets/styles/Introduction.css';

const Approach = () => {
    return (
      <section className="[ section  section--approach ]">

        <header className="section__header">
          
                <h2 className="[ section__heading ]">How</h2>

                <div className="[ section__subtitle ]">
                  <p>I have worked with a number of platforms, frameworks etc over the past 5 years, however to break it down I combine the core Front-end technologies: <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr> and JavaScript to create modular, <abbr title="Don't Repeat Yourself">D-R-Y</abbr>, scalable web applications which work across all modern browsers.</p>
                </div>

                <div className="section__closing">
                    <p>I am currently doing the above over at <a href="http://www.building-blocks.com" target="blank">Building Blocks</a>.</p>
                </div>
          
        </header>

      </section>
    );
}

export default Approach;

