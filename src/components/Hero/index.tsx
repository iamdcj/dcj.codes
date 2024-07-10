export default function Hero() {
  return (
    <section className="grid masthead">
      <img
        width="800"
        height="800"
        alt="Young David Jones playing on toy computer"
        src="https://res.cloudinary.com/dcj-codes/image/upload/c_fill,q_60,r_0,w_375,h_425/v1655903816/2306064_1_xrzfsg.webp"
      />
      <div className="grid__item masthead__inner">
        <h2 className="visually--hidden">Introduction</h2>
        <div className="media">
          <img
            width="300"
            height="300"
            alt="Young David Jones playing on toy computer"
            src="https://res.cloudinary.com/dcj-codes/image/upload/q_60,r_0,w_600/v1655903816/2306064_1_xrzfsg.webp"
          />
          <div>
            <h3 className="masthead__title">Hi</h3>
            <div className="masthead__subtitle">
              <p>
                I'm David Christian Jones,
                <br />A User Interface Engineer based in{" "}
                <abbr title="New York City"> NYC</abbr>.<br />
              </p>
              <p>
                I specialize in developing responsive web applications using the
                latest client-side technologies.
              </p>
              <p>
                <a
                  href="https://dcj-temp.s3.us-east-2.amazonaws.com/dcj.codes/resume.pdf"
                  target="_blank"
                  rel="external noopener noreferrer"
                  className="btn btn--style-b"
                >
                  Résumé
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
