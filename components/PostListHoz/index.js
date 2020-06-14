import PropTypes from 'prop-types';
import { renderPosts } from '../../utils';
import PostItemHoz from '../PostItemHoz';

PostHozList.propTypes = {
  articles: PropTypes.array,
};

PostHozList.defaultProps = {
  articles: [],
};

function PostHozList({ articles }) {
  return renderPosts(articles, PostItemHoz);
}

export default PostHozList;
