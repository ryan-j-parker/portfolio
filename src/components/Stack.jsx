import './Stack.css';

export default function Stack() {
  return (
    <div className="stack">
      <div className="head">
        <h1>Current tech stack:</h1>
      </div>
      <div className="frame">
        <h2>Frameworks/libraries</h2>
        <ul>
          <li>React</li>
          <li>Express</li>
          <li>Three.js</li>
        </ul>
      </div>
      <div className="db">
        <h2>Database</h2>
        <ul>
          <li>PostgreSQL</li>
          <li>Supabase</li>
        </ul>
      </div>
      <div className="tools">
        <h2>Tools</h2>
        <ul>
          <li>Beekeeper</li>
          <li>Discord</li>
          <li>Gimp</li>
          <li>Git, GitHub</li>
          <li>Miro</li>
          <li>Netlify</li>
          <li>Postman</li>
          <li>Slack</li>
          <li>Zoom</li>
        </ul>
      </div>
    </div>
  );
}
