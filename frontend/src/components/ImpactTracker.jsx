import PropTypes from 'prop-types';

const weights = {
  petitions: 5,
  events: 20,
  representatives: 15
};

const formatScore = (actions) =>
  Object.entries(actions).reduce((total, [key, value]) => total + value * (weights[key] ?? 0), 0);

export default function ImpactTracker({ actions, streak, leaderboardRank }) {
  const score = formatScore(actions);

  return (
    <section className="impact-tracker" aria-label="Action tracker">
      <header>
        <h2>Action Tracker</h2>
        <p>Impact Score rewards real-world civic steps.</p>
      </header>
      <dl>
        <div>
          <dt>Petitions signed</dt>
          <dd>{actions.petitions}</dd>
        </div>
        <div>
          <dt>Events attended</dt>
          <dd>{actions.events}</dd>
        </div>
        <div>
          <dt>Reps contacted</dt>
          <dd>{actions.representatives}</dd>
        </div>
      </dl>
      <div className="impact-score">
        <p className="score">{score}</p>
        <p className="label">Impact Score</p>
      </div>
      <footer>
        <p>Daily streak: {streak} days</p>
        <p>Leaderboard rank: #{leaderboardRank}</p>
      </footer>
    </section>
  );
}

ImpactTracker.propTypes = {
  actions: PropTypes.shape({
    petitions: PropTypes.number,
    events: PropTypes.number,
    representatives: PropTypes.number
  }).isRequired,
  streak: PropTypes.number,
  leaderboardRank: PropTypes.number
};

ImpactTracker.defaultProps = {
  streak: 0,
  leaderboardRank: null
};
