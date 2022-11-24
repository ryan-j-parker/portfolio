import './About.css';

export default function About() {
  return (
    <>
      <div className="header-box">
        <a href="https://www.linkedin.com/in/ryanparkerdev" target="_blank" rel="noreferrer">
          <img src="../linkedin-icon.png" className="logo-img" />
        </a>
        <a href="https://www.github.com/ryan-j-parker" target="_blank" rel="noreferrer">
          <img src="../github-icon-white.png" className="logo-img" />
        </a>
        <a href="https://www.twitter.com/ryanparkerdev" target="_blank" rel="noreferrer">
          <img src="../twitter-icon.png" className="logo-img" />
        </a>
      </div>
      <div className="greeting">
        <span className="faceblob" />
        <div className="about-text">
          <h1 className="hi">Hi!</h1>
          <h5 className="my">my name is</h5>
          <h2 className="ryan">Ryan Parker</h2>
          <h2 className="dev">
            I&apos;m a{' '}
            <p className="creative" id="c">
              creative
            </p>{' '}
            <p className="creative" id="s">
              software
            </p>{' '}
            <p className="creative" id="d">
              developer
            </p>{' '}
            located in Vancouver, WA.
          </h2>
          <h3 className="apps">
            I develop responsive, intuitive, and scalable apps with React and Express.
          </h3>
        </div>
      </div>
    </>
  );
}
