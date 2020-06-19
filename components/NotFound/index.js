import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Link from 'next/link';

NotFound.propTypes = {
  locale: PropTypes.string.isRequired,
};

function NotFound({ locale }) {
  console.log('Not Found Component');

  return (
    <>
      <Head>
        <title>Page Not Found - NextJs Blog Starter</title>
      </Head>
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
    </>
  );
}

export default NotFound;
