import './Stack.css';

export default function Stack() {
  return (
    <div className="stack">
      <div className="head">{/* <h1 className="stack-text">Current tech stack:</h1> */}</div>
      <div className="items">
        <div className="frame">
          {/* <img id="htmlcss" className="tech" title="HTML, CSS, JS" src="../icons/html-css-js.png" /> */}
          <a
            className="twitter-timeline"
            data-lang="en"
            data-width="260"
            data-height="500"
            data-theme="dark"
            data-chrome="noscrollbar"
            data-tweet-limit="5"
            href="https://twitter.com/ryanparkerdev?ref_src=twsrc%5Etfw"
          >
            Tweets by ryanparkerdev
          </a>{' '}
          <h2 className="category">Frameworks</h2>
          <div className="icon-box">
            {/* <p className="item">React</p>
            <p className="item">Express</p>
            <p className="item">Three.js</p> */}
            <img className="tech" title="react.js" src="../icons/react-logo.png" />
            <img className="tech" title="express.js" src="../icons/express-icon.png" />
            <img className="tech" title="three.js" src="../icons/threejs-icon.png" />
          </div>
        </div>
        <div className="db">
          <h2 className="category">Database</h2>
          <div className="icon-box">
            {/* <p className="item">PostgreSQL</p>
            <p className="item">Supabase</p> */}
            <img className="tech" title="PostgreSQL" src="../icons/postgres.png" />
            <img className="tech" title="Supabase" src="../icons/supabase-icon.png" />
          </div>
        </div>
        <div className="tools">
          <h2 className="category">Tools</h2>
          <div className="icon-box">
            {/* <p className="item">Beekeeper</p>
            <p className="item">Discord</p>
            <p className="item">Gimp</p>
            <p className="item">Git, GitHub</p>
            <p className="item">Miro</p>
            <p className="item">Netlify</p>
            <p className="item">Postman</p>
            <p className="item">Slack</p>
            <p className="item">Zoom</p> */}
            <img className="tech" title="Beekeeper" src="../icons/beekeeper.png" />
            <img className="tech" title="Discord" src="../icons/discord-logo.png" />
            <img className="tech" title="GIMP 2.0" src="../icons/gimp-icon.png" />
            <img className="tech" title="GitHub" src="../github-icon-white.png" />
            <img className="tech" title="Material UI" src="../icons/mui-icon.png" />
            <img className="tech" title="Miro" src="../icons/miro-icon.png" />
            <img className="tech" title="Netlify" src="../netlify-icon.png" />
            <img className="tech" title="Postman" src="../icons/postman-icon.png" />
            <img className="tech" title="Slack" src="../icons/slack-icon.png" />
            <img className="tech" title="Zoom" src="../icons/zoom-icon-text.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
