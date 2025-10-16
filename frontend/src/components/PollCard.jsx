import { useState } from 'react';

export default function PollCard({ question, options, closesIn }) {
  const [selected, setSelected] = useState(null);

  return (
    <article className="post-card post-poll">
      <h3>{question}</h3>
      <p className="meta">Poll closes in {closesIn}</p>
      <form>
        {options.map((option) => (
          <label key={option} className={`poll-option ${selected === option ? 'selected' : ''}`}>
            <input
              type="radio"
              name="poll"
              value={option}
              onChange={() => setSelected(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </form>
      <button type="button" className="primary-button" disabled={!selected}>
        Submit vote
      </button>
    </article>
  );
}
