import React from 'react';
import About from '../About/About';
import { Portfolio } from '../Portfolio/Portfolio';
import Stack from '../Stack/Stack';
import './Main.css';

export default function Main() {
  return (
    <>
      <div className="App">
        {/* <div className="app-routes"> */}
        <div className="about-wrap">
          <About />
        </div>
        {/* <div className="buffer-left"></div> */}
        <div className="wrap-box">
          <div className="projects-label">
            <h1 className="projects">Projects:</h1>
          </div>
          {/* <div className="projects-wrap"> */}
          <Portfolio />
          {/* </div> */}
          {/* <div className="buffer-right"></div> */}
        </div>
        <div className="stack-wrap">
          <Stack />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
