import PropTypes from 'prop-types';
import React from 'react';

PostEntryContent.propTypes = {
  content: PropTypes.string,
};

PostEntryContent.defaultProps = {
  content: '',
};

function PostEntryContent({ content }) {
  return <p>{content}</p>;
}

export default PostEntryContent;
