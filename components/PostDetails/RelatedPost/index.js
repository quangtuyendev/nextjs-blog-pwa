import PropTypes from 'prop-types';
import React from 'react';
import { renderPosts } from '../../../utils';
import PostItem from '../../PostItem';

RelatedPost.propTypes = {
  articles: PropTypes.array,
};

RelatedPost.defaultProps = {
  articles: [],
};

function RelatedPost({ articles }) {
  return (
    <>
      <div className="related-category-post">
        <h3 className="headline">More From Life Style</h3>
        <div className="row">{renderPosts(articles.slice(0, 3), PostItem)}</div>
      </div>
      <div className="add-banner bg-gray ptb-20">
        <div className="add-content text-center">
          <a title="add" href="/">
            <img
              src="assets/images/advertisement/add728X90.png"
              alt="add"
              style={{ display: 'none !important' }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default RelatedPost;
