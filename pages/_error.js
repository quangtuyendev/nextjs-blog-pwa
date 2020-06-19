import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Layout from '../components/Layout';
import NetWorkError from '../components/NetWorkError';
import NotFound from '../components/NotFound';
import { LocaleContext } from '../contexts/LocaleContext';

ErrorPage.propTypes = {
  articleTopics: PropTypes.array,
  articles: PropTypes.array,
  statusCode: PropTypes.number,
};

ErrorPage.defaultProps = {
  articleTopics: [],
  articles: [],
  statusCode: 400,
};

function ErrorPage({ statusCode, articles, articleTopics }) {
  const { locale } = useContext(LocaleContext);
  return statusCode === 503 ? (
    <Layout pageError articles={articles} articleTopics={articleTopics}>
      <NetWorkError />
    </Layout>
  ) : (
    <Layout pageError articles={articles} articleTopics={articleTopics}>
      <NotFound locale={locale} />
    </Layout>
  );
}

export default ErrorPage;
