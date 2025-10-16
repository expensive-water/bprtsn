import { useMemo, useState } from 'react';
import { TrophyIcon, FlagIcon, MapPinIcon, SparklesIcon } from '@heroicons/react/24/outline';

const campaignsSeed = [
  {
    id: 'mental-health',
    name: 'Mind Matters',
    focus: 'Mental health access',
    goals: ['Host 3 peer-support circles', 'Lobby school board for more counselors'],
    events: ['Wellness Week planning jam', 'National teen mental health day livestream'],
    titles: ['Campaign Organizer', 'Peer Listener', 'Ambassador']
  },
  {
    id: 'free-speech',
    name: 'Readers for All',
    focus: 'Protecting student expression',
    goals: ['Coordinate student testimony', 'Host banned book fair'],
    events: ['Library Letter-Writing Night', 'Statehouse Free Speech Summit'],
    titles: ['Ambassador', 'Media Liaison']
  }
];

const leaderboardSeed = [
  { scope: 'Jefferson High', impactScore: 420 },
  { scope: 'Central Region', impactScore: 318 },
  { scope: 'Illinois', impactScore: 290 }
];

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState(campaignsSeed);
  const [leaderboard] = useState(leaderboardSeed);

  const handleCreate = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const newCampaign = {
      id: form.get('slug'),
      name: form.get('name'),
      focus: form.get('focus'),
      goals: [form.get('goal-1'), form.get('goal-2')].filter(Boolean),
      events: [form.get('event-1')].filter(Boolean),
      titles: ['Campaign Organizer']
    };
    setCampaigns((prev) => [newCampaign, ...prev]);
    event.target.reset();
  };

  const upcomingActions = useMemo(
    () =>
      campaigns.flatMap((campaign) =>
        campaign.events.map((event) => ({
          id: `${campaign.id}-${event}`,
          campaign: campaign.name,
          description: event
        }))
      ),
    [campaigns]
  );

  return (
    <section className="campaigns-section">
      <header className="section-header">
        <FlagIcon />
        <div>
          <h1>Your First Campaign</h1>
          <p>Start or join a cause. Earn leadership titles as you organize petitions, events, and outreach.</p>
        </div>
      </header>

      <div className="campaigns-layout">
        <div className="campaign-list">
          <h2>Active campaigns</h2>
          <ul>
            {campaigns.map((campaign) => (
              <li key={campaign.id}>
                <div>
                  <h3>{campaign.name}</h3>
                  <p className="meta">Focus: {campaign.focus}</p>
                  <p>Goals: {campaign.goals.join(' · ') || 'Set your first milestone'}</p>
                  <p>Events: {campaign.events.join(' · ') || 'Plan your first action'}</p>
                  <p>Titles: {campaign.titles.join(' · ')}</p>
                </div>
                <button type="button" className="secondary-button">
                  Join campaign
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="campaign-create">
          <h2>Launch a new campaign</h2>
          <form onSubmit={handleCreate}>
            <label>
              Campaign name
              <input name="name" required placeholder="e.g., Voters under 18 for Climate Resilience" />
            </label>
            <label>
              Unique handle
              <input name="slug" required placeholder="e.g., climate-builders" />
            </label>
            <label>
              Focus area
              <input name="focus" required placeholder="What change are you championing?" />
            </label>
            <label>
              Key goal 1
              <input name="goal-1" placeholder="Collect 500 signatures" />
            </label>
            <label>
              Key goal 2
              <input name="goal-2" placeholder="Host 2 town halls" />
            </label>
            <label>
              Upcoming event
              <input name="event-1" placeholder="Community listening session" />
            </label>
            <button type="submit" className="primary-button">
              Create campaign
            </button>
          </form>
        </div>
      </div>

      <div className="campaigns-impact">
        <h2>Impact leaderboard</h2>
        <ul>
          {leaderboard.map((entry) => (
            <li key={entry.scope}>
              <TrophyIcon />
              <span>{entry.scope}</span>
              <strong>{entry.impactScore} pts</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="campaigns-actions">
        <h2>Upcoming actions</h2>
        <ul>
          {upcomingActions.length === 0 ? (
            <li>No actions yet—add your first campaign event.</li>
          ) : (
            upcomingActions.map((action) => (
              <li key={action.id}>
                <SparklesIcon />
                <div>
                  <strong>{action.description}</strong>
                  <p>{action.campaign}</p>
                </div>
                <button type="button" className="cta-link">Save to tracker</button>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="campaigns-map">
        <MapPinIcon />
        <div>
          <h2>Politics IRL</h2>
          <p>
            Syncs with Google Civic & Eventbrite to show nearby rallies, voter drives, and volunteer opportunities.
            Tap an event to add it to your Action Tracker.
          </p>
        </div>
        <div className="map-placeholder" role="img" aria-label="Map preview of civic events">
          <span>Interactive civic map</span>
        </div>
      </div>
    </section>
  );
}
