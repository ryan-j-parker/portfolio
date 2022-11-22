import './About.css';

export default function About() {
  return (
    <>
      <div className="greeting">
        <span className="faceblob" />
        <div className="link-box">
          {/* <h3>Ryan Parker, software developer</h3> */}
          <div className="header-link">
            <a href="https://www.linkedin.com/in/ryanparkerdev" target="_blank" rel="noreferrer">
              <img src="../linkedin-icon.png" className="header-logo" />
            </a>
            <a href="https://www.github.com/ryan-j-parker" target="_blank" rel="noreferrer">
              <img src="../github-icon-white.png" className="header-logo" />
            </a>
            <a href="https://www.twitter.com/ryanparkerdev" target="_blank" rel="noreferrer">
              <img src="../twitter-icon.png" className="header-logo" />
            </a>
          </div>
        </div>
        <div className="about-text">
          <h1 className="hi">Hi!</h1>
          <h5 className="my">my name is</h5>
          <h2 className="ryan">Ryan Parker</h2>
          <h2 className="dev">
            and I&apos;m a creative software developer located in Vancouver, WA.
          </h2>
          <h3 className="apps">
            I develop responsive, intuitive, and scalable apps with React and Express.
          </h3>
        </div>
      </div>
    </>
  );
}
