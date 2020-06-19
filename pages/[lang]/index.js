import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import FeatureWrapper from '../../components/Features';
import Layout from '../../components/Layout';
import MainWrapper from '../../components/MainWrapper';
import PostsMain from '../../components/PostsMain';
import MainSidebar from '../../components/Sidebars/MainSidebar';
import Slider from '../../components/Slider';
import Story from '../../components/Stories';
import withLocale from '../../hocs/withLocale';
import { ARTICLES_KEY, ARTICLES_TOPIC_KEY } from '../../queries/key';
import { preFetching } from '../../utils/preFetching';
import ErrorPage from '../_error';

HomePage.propTypes = {
  articles: PropTypes.array,
  articleTopics: PropTypes.array,
};

HomePage.defaultProps = {
  articles: [],
  articleTopics: [],
};

function HomePage({ articles, articleTopics }) {
  return !articles.length ? (
    <ErrorPage statusCode={503} />
  ) : (
    <Layout articles={articles} articleTopics={articleTopics}>
      <Head>
        <title>NextJs Blog Starter</title>
      </Head>
      <Slider articles={articles} />
      <FeatureWrapper
        articleTopics={articleTopics}
        articles={articles.slice(0, 4)}
      />
      <Story articles={articles} />
      <MainWrapper>
        <PostsMain articles={articles} />
        <MainSidebar articles={articles} />
      </MainWrapper>
    </Layout>
  );
}
HomePage.getInitialProps = async () => {
  try {
    // Handle fetch articles
    const { articles } = await preFetching(ARTICLES_KEY, 3600);
    // Handle fetch categories
    const { articleTopics } = await preFetching(ARTICLES_TOPIC_KEY, 3600);
    return {
      articles,
      articleTopics,
    };
  } catch (error) {
    return {
      articles: [],
      articleTopics: [],
    };
  }
};
export default withLocale(HomePage);
