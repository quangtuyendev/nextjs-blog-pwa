import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

function NetWorkError() {
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <title>Page Error - NextJs Blog Starter</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="error-page text-center">
              <div className="error-code">
                <strong>503</strong>
              </div>
              <div className="error-message">
                <h3>You’re offline. Check your connection.</h3>
              </div>
              <div className="error-body">
                Try using the button below to reload this page
                <br />
                <div className="error-button">
                  <a href={asPath} className="btn btn-primary solid blank">
                    <i className="fa fa-undo" />
                    Try again!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NetWorkError;
