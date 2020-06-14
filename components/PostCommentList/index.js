import PropTypes from 'prop-types';

PostCommentList.propTypes = {
  children: PropTypes.array.isRequired,
};

function PostCommentList({ children }) {
  return children;
}

export default PostCommentList;
