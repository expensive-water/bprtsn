import PropTypes from 'prop-types';

export default function TopicColumn({ topic, factCheck, posts }) {
  return (
    <section className="topic-column" aria-label={`${topic} topic`}>
      <header>
        <h2>{topic}</h2>
        <p className="sub">Join civic action & debate with teens across the U.S.</p>
      </header>
      {factCheck}
      <div className="posts">
        {posts.length > 0 ? posts : <p className="placeholder">New posts arriving soon. Share your perspective!</p>}
      </div>
    </section>
  );
}

TopicColumn.propTypes = {
  topic: PropTypes.string.isRequired,
  factCheck: PropTypes.node,
  posts: PropTypes.arrayOf(PropTypes.node)
};

TopicColumn.defaultProps = {
  factCheck: null,
  posts: []
};
