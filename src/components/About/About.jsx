import Header from '../Header/Header';
import './About.css';

export default function About() {
  return (
    <>
      <div className="greeting">
        <span className="faceblob" />
        <Header />
        <div className="about-text">
          <h1 className="hi">Hi!</h1>
          <h5 className="my">my name is</h5>
          <h2 className="ryan">Ryan Parker</h2>
          <h2 className="dev">and I&apos;m a creative software developer located in Vancouver, WA.</h2>
          <h3 className="apps">
            I develop responsive, intuitive, and scalable apps with React and Express.
          </h3>
        </div>
      </div>
    </>
  );
}
