import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PostHozList from '../PostListHoz';

PostCategoryWrapper.propTypes = {
  articlesByCategory: PropTypes.array,
};

PostCategoryWrapper.defaultProps = {
  articlesByCategory: [],
};

function PostCategoryWrapper({ articlesByCategory }) {
  const [showTotalPost, setShowTotalPost] = useState(10);

  const handleSetShowTotalPost = () => {
    setShowTotalPost(showTotalPost + 2);
  };

  return (
    <div className="col-lg-9">
      <main className="site-main">
        <div className="row">
          <PostHozList articles={articlesByCategory.slice(0, showTotalPost)} />
        </div>
      </main>
      <div className="load-more-area text-center mt-30">
        {showTotalPost < articlesByCategory.length ? (
          <button
            type="button"
            onClick={handleSetShowTotalPost}
            className="btn btn-load-more loadmore active"
          >
            <i className="fa fa-spinner" /> Load More
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

export default PostCategoryWrapper;
