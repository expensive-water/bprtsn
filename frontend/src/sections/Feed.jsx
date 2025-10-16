import { useMemo } from 'react';
import { SparklesIcon, PlayCircleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import FactCheckCard from '../components/FactCheckCard.jsx';
import TopicColumn from '../components/TopicColumn.jsx';
import PollCard from '../components/PollCard.jsx';
import VideoCard from '../components/VideoCard.jsx';

const topics = [
  'Climate',
  'Education',
  'Economy',
  'Health',
  'Free Speech'
];

const factChecks = {
  Climate: {
    summary:
      'NASA, NOAA, and multiple bipartisan studies confirm a 1.1°C rise in global temperatures since pre-industrial levels.',
    sources: ['NASA', 'NOAA Climate Report 2023']
  },
  Education: {
    summary:
      'The National Assessment of Educational Progress indicates widening math gaps post-pandemic, especially in underserved districts.',
    sources: ['NAEP 2023', 'Brookings Education Lab']
  },
  Economy: {
    summary:
      'Inflation has slowed for nine consecutive months according to the Bureau of Labor Statistics, yet wage growth remains uneven.',
    sources: ['BLS CPI Report', 'Federal Reserve Beige Book']
  },
  Health: {
    summary:
      'CDC reports teen mental health challenges are improving with access to school-based counseling programs.',
    sources: ['CDC Youth Risk Behavior Survey 2023']
  },
  'Free Speech': {
    summary:
      'First Amendment experts agree that public schools can set reasonable time, place, and manner rules without violating student rights.',
    sources: ['ACLU Student Speech Guide', 'SCOTUS Tinker v. Des Moines']
  }
};

const demoPosts = {
  Climate: [
    {
      id: 'climate-vid-1',
      type: 'video',
      title: 'How coastal teens are responding to rising tides',
      creator: 'Skyla · FL',
      thumbnail: null,
      duration: '02:19'
    },
    {
      id: 'climate-poll-1',
      type: 'poll',
      question: 'Which clean energy source should your city prioritize in 2024?',
      options: ['Offshore wind', 'Community solar', 'Geothermal', 'Energy storage grants'],
      closesIn: '2d'
    }
  ],
  Education: [
    {
      id: 'edu-essay-1',
      type: 'essay',
      title: 'My district swapped detention for restorative circles—here’s what happened',
      creator: 'Devon · WA',
      excerpt: 'Restorative justice lowered suspensions by 18% and boosted student leadership roles...'
    },
    {
      id: 'edu-take-1',
      type: 'take',
      title: 'Take: Dual enrollment should be free for every public-school student',
      creator: 'Priya · TX'
    }
  ]
};

export default function Feed() {
  const topicData = useMemo(
    () =>
      topics.map((topic) => ({
        name: topic,
        factCheck: factChecks[topic],
        posts: demoPosts[topic] ?? []
      })),
    []
  );

  return (
    <section className="feed-section">
      <div className="section-header">
        <SparklesIcon />
        <div>
          <h1>Topic-based town square</h1>
          <p>Explore trending ideas organized by issue—not by algorithm.</p>
        </div>
      </div>
      <div className="topic-grid">
        {topicData.map((topic) => (
          <TopicColumn
            key={topic.name}
            topic={topic.name}
            factCheck={<FactCheckCard topic={topic.name} {...topic.factCheck} />}
            posts={topic.posts.map((post) => {
              if (post.type === 'poll') {
                return <PollCard key={post.id} {...post} />;
              }
              if (post.type === 'video') {
                return <VideoCard key={post.id} {...post} />;
              }
              return (
                <article key={post.id} className={`post-card post-${post.type}`}>
                  <h3>{post.title}</h3>
                  <p className="meta">{post.creator}</p>
                  {post.excerpt ? <p>{post.excerpt}</p> : null}
                  {post.type === 'take' ? (
                    <button type="button" className="cta-link">
                      <ChatBubbleLeftRightIcon /> Join the discussion
                    </button>
                  ) : null}
                </article>
              );
            })}
          />
        ))}
      </div>

      <div className="feed-footer">
        <PlayCircleIcon />
        <p>
          Post a take, essay, poll, or video to invite cross-partisan collaboration. Fact-checks appear under
          each trending topic.
        </p>
      </div>
    </section>
  );
}
