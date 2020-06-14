import PropTypes from 'prop-types';
import React from 'react';
import PostHozList from '../../PostListHoz';

RecentPost.propTypes = {
  articles: PropTypes.array,
};

RecentPost.defaultProps = {
  articles: [],
};

function RecentPost({ articles }) {
  return (
    <div className="related-post pt-80 mb-30">
      <h3 className="headline">You Might Like Also</h3>
      <div className="row">
        <PostHozList articles={articles.slice(0, 3)} />
      </div>
    </div>
  );
}

export default RecentPost;
