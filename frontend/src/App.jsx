import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Feed from './sections/Feed.jsx';
import Debate from './sections/Debate.jsx';
import Campaigns from './sections/Campaigns.jsx';
import Profile from './sections/Profile.jsx';
import LiveUpdates from './components/LiveUpdates.jsx';

const navItems = [
  { name: 'Feed', to: '/' },
  { name: 'Debate', to: '/debate' },
  { name: 'Campaigns', to: '/campaigns' },
  { name: 'Profile', to: '/profile' }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="brand-accent">prtsn.</span>
          <span className="brand-mission">Two Parties. One Country.</span>
        </div>
        <nav className={`primary-nav ${mobileMenuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <button
          className="mobile-nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <Bars3Icon />
        </button>
      </header>

      <main className="main-content">
        <LiveUpdates />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/debate" element={<Debate />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Partisan • Built for informed, empathetic action.</p>
      </footer>
    </div>
  );
}
