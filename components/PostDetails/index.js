import PropTypes from 'prop-types';
import React from 'react';
import PostCommentItem from '../PostCommentItem';
import PostCommentList from '../PostCommentList';
import AuthorInfo from './AuthorInfo';
import FormWrapper from './FormWrapper';
import PostEntryContent from './PostEntryContent';
import PostShareCount from './PostShareCount';
import RecentPost from './RecentPost';
import Thumbnail from './Thumbnail';

PostDetails.propTypes = {
  article: PropTypes.object,
  articles: PropTypes.array,
};

PostDetails.defaultProps = {
  article: {},
  articles: [],
};

function PostDetails({ article, articles }) {
  const { Items } = article;

  const renderContent = () => {
    const result = [];
    for (let i = 0; i < Items.length; i++) {
      const { Content, Photo } = Items[i];
      if (Content) {
        result.push(<PostEntryContent key={i} content={Content} />);
      }
      if (Photo) {
        result.push(<Thumbnail key={i} Photo={Photo} />);
      }
    }
    return result;
  };

  return (
    <div className="col-lg-9">
      <main className="site-main">
        <div className="post single-post single-post-one">
          <PostShareCount />
          {Items && renderContent()}
        </div>
        <AuthorInfo />
        <RecentPost articles={articles} />
        <PostCommentList>
          <PostCommentItem />
          <PostCommentItem />
        </PostCommentList>
        <FormWrapper />
      </main>
    </div>
  );
}

export default PostDetails;
