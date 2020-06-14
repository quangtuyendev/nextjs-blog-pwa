import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
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

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>{renderMetaTitle()}</title>
        <link rel="manifest" href="manifest.json" />
        <link
          href="img/app-icon.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <meta name="theme-color" content="#3367D6" />
        <link rel="apple-touch-icon" href="img/app-icon.png" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
