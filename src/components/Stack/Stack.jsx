import './Stack.css';

export default function Stack() {
  return (
    <div className="stack">
      <div className="head">
        <h1>Current tech stack:</h1>
      </div>
      <div className="items">
        <div className="frame">
          <h2>Frameworks/libraries</h2>
          <div>
            <p>React</p>
            <p>Express</p>
            <p>Three.js</p>
          </div>
        </div>
        <div className="db">
          <h2>Database</h2>
          <div>
            <p>PostgreSQL</p>
            <p>Supabase</p>
          </div>
        </div>
        <div className="tools">
          <h2>Tools</h2>
          <div>
            <p>Beekeeper</p>
            <p>Discord</p>
            <p>Gimp</p>
            <p>Git, GitHub</p>
            <p>Miro</p>
            <p>Netlify</p>
            <p>Postman</p>
            <p>Slack</p>
            <p>Zoom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
