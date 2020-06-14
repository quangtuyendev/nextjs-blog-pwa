import PropTypes from 'prop-types';
import React from 'react';
import { renderPosts } from '../../../../utils';
import PostItem from './PostItem';
import PostList from './PostList';

PostPopular.propTypes = {
  articles: PropTypes.array,
};

PostPopular.defaultProps = {
  articles: [],
};

function PostPopular({ articles }) {
  return (
    <aside className="widget popular-posts-widget">
      <h4 className="widget-title">
        <span>Popular Post</span>
      </h4>
      <div className="widget-content">
        <PostList>{renderPosts(articles.slice(0, 3), PostItem)}</PostList>
      </div>
    </aside>
  );
}

export default PostPopular;
