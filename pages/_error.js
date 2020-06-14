import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';
import { ARTICLES_KEY, ARTICLES_TOPIC_KEY } from '../queries/key';
import { preFetching } from '../utils/preFetching';

Error.propTypes = {
  articleTopics: PropTypes.array,
  articles: PropTypes.array,
};

Error.defaultProps = {
  articleTopics: [],
  articles: [],
};

function Error({ articles, articleTopics }) {
  return (
    <>
      <Layout articles={articles} articleTopics={articleTopics}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="error-page text-center">
                <div className="error-message">
                  <strong>You’re offline. Check your connection.</strong>
                </div>
                <div className="error-button">
                  <Link href="/" as="/">
                    <a className="btn btn-primary solid blank">Try again!</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

Error.getInitialProps = async () => {
  // Handle fetch articles
  const { articles } = await preFetching(ARTICLES_KEY, 3600);
  // Handle fetch categories
  const { articleTopics } = await preFetching(ARTICLES_TOPIC_KEY, 3600);

  return {
    articles,
    articleTopics,
  };
};

export default Error;
