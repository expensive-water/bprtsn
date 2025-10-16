import { PlayCircleIcon } from '@heroicons/react/24/solid';

export default function VideoCard({ title, creator, thumbnail, duration }) {
  return (
    <article className="post-card post-video">
      <div className={`video-thumb ${thumbnail ? '' : 'video-thumb--empty'}`}>
        {thumbnail ? <img src={thumbnail} alt="Video thumbnail" /> : null}
        <span className="duration">{duration}</span>
        <PlayCircleIcon />
      </div>
      <div className="video-meta">
        <h3>{title}</h3>
        <p className="meta">{creator}</p>
      </div>
    </article>
  );
}
