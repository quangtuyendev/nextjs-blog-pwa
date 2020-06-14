import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import 'react-medium-image-zoom/dist/styles.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Provider from '../contexts';
import { LocaleContext } from '../contexts/LocaleContext';
import '../static/css/fontawesome.all.min.css';
import '../static/css/fontawesome.min.css';
import '../static/css/global.css';
import '../static/vendors/flaticon/flaticon.css';

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};

App.defaultProps = {
  pageProps: {},
};

function App({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = useContext(LocaleContext);
  const {
    asPath,
    query: { lang, ...params },
  } = router;

  const renderMetaTitle = () => {
    const { postTitle, category } = params;
    if (asPath === `/${locale}`) {
      return 'NextJs-Blog';
    } else if (category) {
      return `${_.startCase(category)} - NextJs-Blog`;
    } else if (postTitle) {
      return `${_.capitalize(_.startCase(postTitle))} - NextJs-Blog`;
    }
  };

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => {
          console.log('service worker registration successful');
        })
        .catch((err) => {
          console.warn('service worker registration failed', err.message);
        });
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <meta property="og:image" key="ogimage" />
        <title>{renderMetaTitle()}</title>

        <link rel="manifest" href="/static/manifest.json" />

        <meta name="theme-color" content="#317EFB" />
        <link
          rel="shortcut icon"
          href="/static/android-icon-192x192-dunplab-manifest-2613.png"
        />
        <link rel="apple-touch-icon" href="/static/favicon.png" />
        <meta name="apple-mobile-web-app-title" content="Nextjs Blog" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
