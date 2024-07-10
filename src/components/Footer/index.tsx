export default function Footer() {
  return (
    <footer className="grid site-footer">
      <header className="grid__item section__header">
        <h2 className="section__heading">Contact</h2>
        <div className="section__subtitle">
          <p>
            If you would like to get in touch, just
            <a href="mailto:david@dcj.codes" target="blank">
              drop me a line
            </a>
            .
          </p>
        </div>
      </header>
      <div className="grid__item">
        <nav className="navigation navigation--social">
          <h3 className="navigation__title visually--hidden">
            Social Navigation
          </h3>
          <ul>
            <li>
              <a
                href="https://github.com/iamdcj/"
                target="_blank"
                rel="external noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/iamdcj/"
                target="_blank"
                rel="external noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.strava.com/athletes/iamdcj"
                target="_blank"
                rel="external noopener noreferrer"
              >
                Strava
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid__item">
        <small className="copyright">© dcj.codes</small>
      </div>
      <a href="#" className="btn back-to-top btn--style-a">
        {" "}
        ↑ Top
      </a>
    </footer>
  );
}
