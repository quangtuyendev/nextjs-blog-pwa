import PropTypes from 'prop-types';

PostList.propTypes = {
  articleTopics: PropTypes.array,
};

function PostList({ children }) {
  return children;
}

export default PostList;
