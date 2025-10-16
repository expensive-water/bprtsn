import { useState } from 'react';
import { BoltIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const demoRequests = [
  {
    id: 'debate-1',
    topic: 'Climate',
    title: 'What is the fairest path to pricing carbon?',
    host: 'Emilia · CA',
    format: 'Opening • Rebuttal • Closing',
    status: 'Open for challenge'
  },
  {
    id: 'debate-2',
    topic: 'Free Speech',
    title: 'How should schools handle book bans?',
    host: 'Jalen · GA',
    format: 'Opening • Rebuttal • Closing',
    status: 'Matched'
  }
];

const roundLabels = ['Opening', 'Rebuttal', 'Closing'];

export default function Debate() {
  const [requests, setRequests] = useState(demoRequests);

  const handleCreate = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const newRequest = {
      id: `debate-${requests.length + 1}`,
      topic: form.get('topic'),
      title: form.get('title'),
      host: 'You',
      format: 'Opening • Rebuttal • Closing',
      status: 'Open for challenge'
    };
    setRequests((prev) => [newRequest, ...prev]);
    event.target.reset();
  };

  return (
    <section className="debate-section">
      <header className="section-header">
        <BoltIcon />
        <div>
          <h1>Civic Debate Mode</h1>
          <p>Practice clarity and civility in three structured rounds. Votes reward empathy and fact-based responses.</p>
        </div>
      </header>

      <div className="debate-layout">
        <div className="debate-requests">
          <h2>Open debate requests</h2>
          <ul>
            {requests.map((request) => (
              <li key={request.id} className="debate-card">
                <div>
                  <p className="topic">{request.topic}</p>
                  <h3>{request.title}</h3>
                  <p className="meta">Hosted by {request.host}</p>
                  <p className="meta">{request.format}</p>
                </div>
                <button type="button" className="secondary-button">
                  {request.status === 'Open for challenge' ? 'Accept challenge' : 'View rounds'}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="debate-create">
          <h2>Start a moderated debate</h2>
          <form onSubmit={handleCreate}>
            <label>
              Topic
              <select name="topic" required>
                <option value="">Choose a topic</option>
                <option value="Climate">Climate</option>
                <option value="Education">Education</option>
                <option value="Economy">Economy</option>
                <option value="Health">Health</option>
                <option value="Free Speech">Free Speech</option>
              </select>
            </label>
            <label>
              Debate prompt
              <input name="title" type="text" placeholder="Frame your civic question" required maxLength={120} />
            </label>
            <button type="submit" className="primary-button">
              Request a debate
            </button>
          </form>
        </div>
      </div>

      <div className="debate-rounds">
        <h2>How rounds work</h2>
        <ol>
          {roundLabels.map((round) => (
            <li key={round}>
              <span className="round-label">{round}</span>
              <p>
                {round === 'Opening' && 'Share your values, lived experience, and core argument respectfully.'}
                {round === 'Rebuttal' && 'Respond with empathy, cite evidence, and address community impact.'}
                {round === 'Closing' && 'Highlight common ground, unanswered questions, and next steps.'}
              </p>
            </li>
          ))}
        </ol>
        <div className="debate-voting">
          <UserGroupIcon />
          <p>Peers vote for clarity, empathy, and factual grounding. Moderators spotlight standout civic bridge-builders.</p>
        </div>
      </div>
    </section>
  );
}
