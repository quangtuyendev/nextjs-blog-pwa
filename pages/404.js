import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { LocaleContext } from '../contexts/LocaleContext';
import { ARTICLES_KEY, ARTICLES_TOPIC_KEY } from '../queries/key';
import { preFetching } from '../utils/preFetching';

NotFound.propTypes = {
  articleTopics: PropTypes.array,
  articles: PropTypes.array,
};

NotFound.defaultProps = {
  articleTopics: [],
  articles: [],
};

function NotFound({ articles, articleTopics }) {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <Head>
        <title>Not Found - NextJs-Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout articles={articles} articleTopics={articleTopics}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="error-page text-center">
                <div className="error-code">
                  <strong>404</strong>
                </div>
                <div className="error-message">
                  <h3>Oops... Page Not Found!</h3>
                </div>
                <div className="error-body">
                  Try using the button below to go to main page of the site
                  <br />
                  <Link href="/[lang]" as={`/${locale}`}>
                    <a className="btn btn-primary solid blank">
                      <i className="fa fa-arrow-circle-left" />
                      Back to Home Page
                    </a>
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

export default NotFound;
