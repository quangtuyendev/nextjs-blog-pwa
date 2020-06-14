import PropTypes from 'prop-types';
import React from 'react';
import CategoryList from '../../CategoryList';

PostCats.propTypes = {
  articleTopics: PropTypes.array,
};

PostCats.defaultProps = {
  articleTopics: [],
};

function PostCats({ articleTopics }) {
  return (
    <>
      <aside className="widget widget-categories">
        <h4 className="widget-title">
          <span>Categories</span>
        </h4>
        <CategoryList articleTopics={articleTopics} />
      </aside>
    </>
  );
}

export default PostCats;
