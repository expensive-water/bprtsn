export default function FactCheckCard({ topic, summary, sources = [] }) {
  return (
    <div className="fact-check-card">
      <p className="badge">Fact-check</p>
      <h3>{topic}</h3>
      <p>{summary}</p>
      <ul>
        {sources.map((source) => (
          <li key={source}>{source}</li>
        ))}
      </ul>
    </div>
  );
}
