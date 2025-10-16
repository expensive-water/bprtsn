import { useState } from 'react';
import { ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/solid';
import ImpactTracker from '../components/ImpactTracker.jsx';
import MyStanceCard from '../components/MyStanceCard.jsx';

const mockStances = [
  { topic: 'Climate', position: 'Invest in resilient infrastructure & youth-led innovation' },
  { topic: 'Education', position: 'Expand media literacy + civics in every high school' },
  { topic: 'Health', position: 'Normalize peer mental health support and access' }
];

const mockBadges = [
  { name: 'Bridge Builder', description: 'Earned 5 clarity votes in Debate Mode' },
  { name: 'Action Starter', description: 'Created first campaign event' },
  { name: 'Fact Ally', description: 'Submitted 3 fact-check sources' }
];

export default function Profile() {
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <section className="profile-section">
      <header className="section-header">
        <ShieldCheckIcon />
        <div>
          <h1>Your profile</h1>
          <p>Control privacy, celebrate civic wins, and showcase your evolving perspective.</p>
        </div>
        <label className="privacy-toggle">
          <input type="checkbox" checked={isPrivate} onChange={() => setIsPrivate((prev) => !prev)} />
          <span>{isPrivate ? 'My profile is private' : 'Profile visible to verified peers'}</span>
        </label>
      </header>

      <div className="profile-layout">
        <MyStanceCard stances={mockStances} />
        <ImpactTracker
          actions={{ petitions: 4, events: 2, representatives: 3 }}
          streak={12}
          leaderboardRank={7}
        />
        <div className="badges">
          <h2>Civic badges</h2>
          <ul>
            {mockBadges.map((badge) => (
              <li key={badge.name}>
                <SparklesIcon />
                <div>
                  <strong>{badge.name}</strong>
                  <p>{badge.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
