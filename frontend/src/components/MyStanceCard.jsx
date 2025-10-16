import PropTypes from 'prop-types';

export default function MyStanceCard({ stances }) {
  return (
    <section className="stance-card">
      <header>
        <h2>My Stance Card</h2>
        <p>Summarize where you stand and how you’re learning.</p>
      </header>
      <ul>
        {stances.map((stance) => (
          <li key={stance.topic}>
            <h3>{stance.topic}</h3>
            <p>{stance.position}</p>
          </li>
        ))}
      </ul>
      <button type="button" className="secondary-button">
        Update my stance
      </button>
    </section>
  );
}

MyStanceCard.propTypes = {
  stances: PropTypes.arrayOf(
    PropTypes.shape({
      topic: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired
    })
  ).isRequired
};
