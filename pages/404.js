import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { LocaleContext } from '../contexts/LocaleContext';

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
