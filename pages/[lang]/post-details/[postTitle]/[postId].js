import _ from 'lodash';
import Head from 'next/head';
import { useRouter } from 'next/router';
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
import { BASE_URL } from '../../../../constants';
import { preFetching } from '../../../../utils/preFetching';
import ErrorPage from '../../../_error';

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
  const router = useRouter();
  const { Photo } = article;
  const {
    query: { postTitle },
  } = router;

  return !articles.length ? (
    <ErrorPage statusCode={503} />
  ) : (
    <Layout articles={articles} articleTopics={articleTopics}>
      <Head>
        <title>
          {`${_.capitalize(_.startCase(postTitle))} `}- NextJs Blog Starter
        </title>
        <meta property="og:image" content={BASE_URL + Photo.url} />
      </Head>
      <PostDetailsHero {...article} />
      <MainWrapper>
        <PostDetails article={article} articles={articles} />
        <MainSidebar articles={articles}>
          <PostCats articleTopics={articleTopics} />
        </MainSidebar>
      </MainWrapper>
    </Layout>
  );
}

PostDetailsPage.getInitialProps = async ({ query: { postId } }) => {
  try {
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
  } catch (error) {
    return {
      article: [],
      articles: [],
      articleTopics: [],
    };
  }
};

export default PostDetailsPage;
