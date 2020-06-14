import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PostHozList from '../PostListHoz';

PostsMain.propTypes = {
  articles: PropTypes.array,
};

PostsMain.defaultProps = {
  articles: [],
};

function PostsMain({ articles }) {
  const [showTotalPost, setShowTotalPost] = useState(8);
  const handleShowPost = () => {
    setShowTotalPost(showTotalPost + 2);
  };

  return (
    <div className="col-lg-9">
      <main className="site-main">
        <div className="row">
          <div className="col-12">
            <div className="section-header">
              <h2 className="section-title">Around Of The World</h2>
            </div>
          </div>
          <PostHozList articles={articles.slice(0, showTotalPost)} />
        </div>
      </main>
      <div className="load-more-area text-center mt-30">
        {showTotalPost < articles.length ? (
          <button
            type="button"
            onClick={handleShowPost}
            className="btn btn-load-more loadmore active"
          >
            <i className="fa fa-spinner" />
            Load More
          </button>
        ) : (
          <span className="no-posts" style={{ display: 'inline' }}>
            No more posts
          </span>
        )}
      </div>
    </div>
  );
}

export default PostsMain;
