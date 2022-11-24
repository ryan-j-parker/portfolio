import './Stack.css';

export default function Stack() {
  return (
    <div className="stack">
      <div className="head">
        <h1>Current tech stack:</h1>
      </div>
      <div className="items">
        <div className="frame">
          <h2 className="category">Frameworks/libraries</h2>
          <div>
            <p className="item">React</p>
            <p className="item">Express</p>
            <p className="item">Three.js</p>
          </div>
        </div>
        <div className="db">
          <h2 className="category">Database</h2>
          <div>
            <p className="item">PostgreSQL</p>
            <p className="item">Supabase</p>
          </div>
        </div>
        <div className="tools">
          <h2 className="category">Tools</h2>
          <div>
            <p className="item">Beekeeper</p>
            <p className="item">Discord</p>
            <p className="item">Gimp</p>
            <p className="item">Git, GitHub</p>
            <p className="item">Miro</p>
            <p className="item">Netlify</p>
            <p className="item">Postman</p>
            <p className="item">Slack</p>
            <p className="item">Zoom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
