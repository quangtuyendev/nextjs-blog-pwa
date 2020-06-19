import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import React from 'react';
import 'react-medium-image-zoom/dist/styles.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Provider from '../contexts';
import '../public/static/css/fontawesome.all.min.css';
import '../public/static/css/fontawesome.min.css';
import '../public/static/css/global.css';
import '../public/static/vendors/flaticon/flaticon.css';

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};

App.defaultProps = {
  pageProps: {},
};

function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
