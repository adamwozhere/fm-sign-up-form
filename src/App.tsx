import Form from './components/Form';

import './style/App.css';

export default function App() {
  return (
    <div className="wrapper">
      <div className="container splitter">
        <section className="intro">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <section className="form-section">
          <div className="card cta">
            <p>
              <strong>Try it free for 7 days</strong> then $20/mo. thereafter
            </p>
          </div>
          <Form />
        </section>
      </div>
    </div>
  );
}

