import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../../../../components/Layout';
import MainWrapper from '../../../../components/MainWrapper';
import PostDetails from '../../../../components/PostDetails';
import PostCats from '../../../../components/PostDetails/PostCats';
import PostDetailsHero from '../../../../components/PostDetailsHero';
import MainSidebar from '../../../../components/Sidebars/MainSidebar';
import {
  articleKey,
  ARTICLES_KEY,
  ARTICLES_TOPIC_KEY,
} from '../../../../queries/key';
import { preFetching } from '../../../../utils/preFetching';

PostDetailsPage.propTypes = {
  articles: PropTypes.array,
  article: PropTypes.object,
  articleTopics: PropTypes.array,
};

PostDetailsPage.defaultProps = {
  articles: [],
  article: {},
  articleTopics: [],
};

function PostDetailsPage({ articles, article, articleTopics }) {
  return (
    <>
      <Layout articles={articles} articleTopics={articleTopics}>
        <PostDetailsHero {...article} />
        <MainWrapper>
          <PostDetails article={article} articles={articles} />
          <MainSidebar articles={articles}>
            <PostCats articleTopics={articleTopics} />
          </MainSidebar>
        </MainWrapper>
      </Layout>
    </>
  );
}

PostDetailsPage.getInitialProps = async ({ query: { postId } }) => {
  // Handle fetch articles
  const { articles } = await preFetching(ARTICLES_KEY, 3600);
  // Handle fetch article
  const { article } = await preFetching(articleKey({ id: postId }), 3600);
  // Handle fetch categories
  const { articleTopics } = await preFetching(ARTICLES_TOPIC_KEY, 3600);
  return {
    article,
    articles,
    articleTopics,
  };
};

export default PostDetailsPage;
