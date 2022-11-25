import React from 'react';
import About from '../About/About';
import { Portfolio } from '../Portfolio/Portfolio';
import Stack from '../Stack/Stack';
import './Main.css';

export default function Main() {
  return (
    <>
      <div className="App">
        <div className="about-wrap">
          <About />
        </div>
        <div className="wrap-box">
          <div className="projects-label">
            <h1 className="projects">Projects:</h1>
          </div>
          <Portfolio />
          <p className="mark">&#169;2022 Ryan J. Parker</p>
        </div>
        <div className="stack-wrap">
          <Stack />
        </div>
      </div>
    </>
  );
}
