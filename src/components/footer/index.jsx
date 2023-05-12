
import React from "react";

const Footer = () => (
  <footer className="grid site-footer">
    <div className="site-footer__inner">
      <p>
        {" "}
        © iamdcj {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </p>
      <nav>
        <ul class="navigation">
          <li>
            <a href="https://github.com/iamdcj/" target="_blank" rel="nofollow">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/iamdcj/" target="_blank" rel="nofollow">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.strava.com/athletes/iamdcj" target="_blank" rel="nofollow">Strava</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
