import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import axios from 'axios';

dayjs.extend(relativeTime);

const initialMessages = [
  {
    id: 'welcome',
    text: 'Welcome to prtsn.—a civic town square for the next generation.',
    createdAt: dayjs().subtract(2, 'minute').toISOString()
  },
  {
    id: 'debate',
    text: 'New debate requests posted in Civic Debate Mode. Jump in to practice empathy.',
    createdAt: dayjs().subtract(5, 'minute').toISOString()
  }
];

export default function LiveUpdates() {
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    const fetchTicker = async () => {
      try {
        const { data } = await axios.get('/api/v1/status/updates');
        if (Array.isArray(data?.items)) {
          setMessages((prev) => {
            const merged = [...data.items, ...prev];
            const unique = merged.reduce((acc, item) => {
              if (!acc.find((existing) => existing.id === item.id)) {
                acc.push(item);
              }
              return acc;
            }, []);
            return unique.slice(0, 6);
          });
        }
      } catch (error) {
        console.info('Live update ticker is operating with cached data.', error);
      }
    };

    fetchTicker();
    const interval = setInterval(fetchTicker, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="live-updates" aria-live="polite">
      <h2>Live civic wins</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <time dateTime={message.createdAt}>{dayjs(message.createdAt).fromNow()}</time>
            <p>{message.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
