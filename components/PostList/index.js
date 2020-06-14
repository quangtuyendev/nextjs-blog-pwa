import PropTypes from 'prop-types';
import { renderPosts } from '../../utils';

PostList.propTypes = {
  perPage: PropTypes.number.isRequired,
  currentTab: PropTypes.number.isRequired,
  articles: PropTypes.array,
  component: PropTypes.func.isRequired,
};

PostList.defaultProps = {
  articles: [],
};

function PostList({ perPage, currentTab, articles, component }) {
  const start = currentTab * perPage;
  const end = start + perPage;
  return renderPosts(articles.slice(start, end), component);
}

export default PostList;
