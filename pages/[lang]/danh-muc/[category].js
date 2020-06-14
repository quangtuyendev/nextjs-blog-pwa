import 'isomorphic-fetch';
import { useRouter } from 'next/dist/client/router';
import PropTypes from 'prop-types';
import React from 'react';
import BreadCrumb from '../../../components/BreadCrumb';
import Layout from '../../../components/Layout';
import MainWrapper from '../../../components/MainWrapper';
import PostCategoryWrapper from '../../../components/PostCategoryWrapper';
import MainSidebar from '../../../components/Sidebars/MainSidebar';
import {
  ARTICLES_KEY,
  ARTICLES_TOPIC_KEY,
  filterPost,
} from '../../../queries/key';
import { preFetching } from '../../../utils/preFetching';

CategoryPage.propTypes = {
  articles: PropTypes.array,
  articlesByCategory: PropTypes.array,
  articleTopics: PropTypes.array,
};

CategoryPage.defaultProps = {
  articles: [],
  articlesByCategory: [],
  articleTopics: [],
};

function CategoryPage({ articles, articlesByCategory, articleTopics }) {
  const {
    query: { category },
  } = useRouter();

  return (
    <>
      <Layout articles={articles} articleTopics={articleTopics}>
        <BreadCrumb category={category} />
        <MainWrapper>
          <PostCategoryWrapper articlesByCategory={articlesByCategory} />
          <MainSidebar articles={articles} />
        </MainWrapper>
      </Layout>
    </>
  );
}

CategoryPage.getInitialProps = async ({ query: { category } }) => {
  // Handle fetch articles
  const { articles } = await preFetching(ARTICLES_KEY, 3600);
  // Handle fetch categories
  const { articleTopics } = await preFetching(ARTICLES_TOPIC_KEY, 3600);
  const { articles: articlesByCategory } = await preFetching(
    filterPost({ Slug: category }),
    3600,
  );

  return {
    articles,
    articleTopics,
    articlesByCategory,
  };
};

export default CategoryPage;
